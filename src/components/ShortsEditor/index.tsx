import { useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import NotificationService from '../../libs/toastify/notificationService';
import instance from '../../libs/axios/customAxios';

const ShortsEditor = () => {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDetail = (e: any) => {
    setDetail(e.target.value);
  };

  const submit = async () => {
    if (
      title.trim().length > 0 &&
      title.length < 51 &&
      detail.trim().length > 0
    ) {
      try {
        setLoading(true);
        const res = await instance.post("/boards", {
          title,
          detail,
          category: "SHORTS",
        });
        console.log(res);
        NotificationService.success("게시완료");
        navigate("/");
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

  return (
    <S.Container>
      <S.TitleInput placeholder='제목을 입력해주세요.(50자 이하)' onChange={handleTitle} value={title}/>
      <S.DetailInput placeholder='내용을 입력해주세요 (250자 이하)' maxLength={250} onChange={handleDetail} value={detail}/>
      <S.SubmitBtn onClick={submit} disabled={loading}>{!loading ? "게시하기" : "게시중..."}</S.SubmitBtn>
    </S.Container>
  )
}

export default ShortsEditor