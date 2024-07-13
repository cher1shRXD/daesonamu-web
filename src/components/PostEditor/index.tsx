import { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import * as S from "./style";
import instance from "../../libs/axios/customAxios";
import NotificationService from "../../libs/toastify/notificationService";
import { useNavigate, useParams } from "react-router-dom";
import useGetBoardDetail from "../../hooks/useGetBoardDetail";

const mdParser = new MarkdownIt();

const PostEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const param = useParams();
  const { getBoardDetail, error } = useGetBoardDetail();

  const handleEditorChange = ({ text }: { text: string }) => {
    setMarkdown(text);
  };

  const getOriginal = async () => {
    try{
      const res = await getBoardDetail(Number(param.id));
      setMarkdown(res.detail);
      setTitle(res.title);
    }catch{
      if(error === undefined) {
        navigate('/not-found');
      }
    }
  } 

  useEffect(()=>{
    getOriginal();
  },[]);

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

  const onImageUpload = async (file: any, callback: any) => {
    const result = await handleImageUpload(file);
    if (result && result.url) {
      callback(result.url);
    }
  };

  const submit = async () => {
    if (
      title.trim().length > 0 &&
      title.length < 51 &&
      markdown.trim().length > 0 &&
      !imageLoading
    ) {
      try {
        setLoading(true);
        const res = await instance.patch(`/boards/${param.id}/edit`, { title, detail: markdown });
        console.log(res);
        NotificationService.success("수정완료");
        navigate(`/free-board/${param.id}`);
      } catch (err) {
        NotificationService.error('네트워크 에러');
      } finally {
        setLoading(false);
      }
    } else {
      NotificationService.warn(
        "제목과 내용이 모두 채워져있거나, 제목이 50자 이내인지 확인 해주세요."
      );
    }
  };

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <S.Container>
      <S.TitleInput
        placeholder="제목을 입력하세요. (50자 이하)"
        onChange={handleTitle}
        value={title}
      />
      <S.MarkdownWrap>
        <MdEditor
          value={markdown}
          style={{ height: "100%", width: "49%" }}
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
          style={{ height: "100%", width: "49%" }}
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
      <S.SubmitBtn onClick={submit} disabled={loading}>{!loading ? "수정하기":"수정중..."}</S.SubmitBtn>
    </S.Container>
  );
};

export default PostEditor;
