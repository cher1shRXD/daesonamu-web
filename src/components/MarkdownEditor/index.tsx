import { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import * as S from "./style";
import instance from "../../libs/axios/customAxios";
import NotificationService from "../../libs/toastify/notificationService";
import { useNavigate } from "react-router-dom";

const mdParser = new MarkdownIt();

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEditorChange = ({ text }: { text: string }) => {
    setMarkdown(text);
  };

  const handleImageUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setImageLoading(true);
      const res = await instance.post(
        "http://api-daesonamu.kro.kr:8080/upload/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data && res.data.url) {
        const imageUrl = res.data.url;
        setMarkdown(
          (prevMarkdown) => `${prevMarkdown}\n![Image](${imageUrl})\n`
        );
        return { url: imageUrl };
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    } finally {
      setImageLoading(false);
    }
  };

  const onImageUpload = async (file:any, callback:any) => {
    const result = await handleImageUpload(file);
    if (result && result.url) {
      callback(result.url);
    }
  };

  const submit = async () => {
    if(title.trim().length > 0 && title.length < 51 && markdown.trim().length > 0 && !imageLoading) {
      try{
        setLoading(true);
        const res = await instance.post('/boards',{title,detail:markdown,category:"FREE"});
        console.log(res);
        NotificationService.success('게시완료');
        navigate('/');
      }catch(err){
        console.log(err);
      }finally{
        setLoading(false);
      }
    }else{
      NotificationService.warn('제목과 내용이 모두 채워져있거나, 제목이 50자 이내인지, 이미지 로딩이 완료되었는지 확인해주세요.');
    }
  }

  const handleTitle = (e:any) => {
    setTitle(e.target.value);
  }

  return (
    <S.Container>
      <S.TitleInput
        placeholder="제목을 입력하세요. (50자 이하)"
        onChange={handleTitle}
      />
      <S.MarkdownWrap>
        <MdEditor
          value={markdown}
          style={{ height: "calc(100vh - 40rem)", width:'75rem', marginBottom:'2rem' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
          onImageUpload={onImageUpload}
          config={{
            view: {
              md: true,
              menu: true,
              html: false,
            },
          }}
        />
        <MdEditor
          onChange={handleEditorChange}
          onImageUpload={onImageUpload}
          value={markdown}
          style={{ height: "calc(100vh - 40rem)",width:'75rem' }}
          renderHTML={(text) => mdParser.render(text)}
          config={{
            view: {
              md: false,
              menu: false,
              html: true,
            },
          }}
        />
      </S.MarkdownWrap>
      <S.SubmitBtn onClick={submit} disabled={loading}>{!loading ? "게시하기" : "게시중..."}</S.SubmitBtn>
    </S.Container>
  );
};

export default MarkdownEditor;
