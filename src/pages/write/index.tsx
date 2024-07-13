import { useNavigate } from "react-router-dom";
import NotificationService from "../../libs/toastify/notificationService";
import { useEffect, useState } from "react";
import * as S from './style';
import MarkdownEditor from "../../components/MarkdownEditor";
import ShortsEditor from "../../components/ShortsEditor";

const Write = () => {

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  const navigate = useNavigate();

  const [category,setCategory] = useState("FREE");

  useEffect(()=>{
    if (accessToken === undefined) {
      NotificationService.warn("로그인 후 이용해 주세요.");
      navigate("/");
    }
  },[]);

  const handleCategory = (e:any) => {
    setCategory(e.target.value);
  }


  return (
    <S.Container>
      <S.WriteOptionWrap>
        <S.SelectBox onChange={handleCategory}>
          <S.Option value="FREE">자유게시판</S.Option>
          <S.Option value="SHORTS">쇼츠게시판</S.Option>
        </S.SelectBox>
      </S.WriteOptionWrap>
      {
        category === "FREE" ? (
          <MarkdownEditor />
        ) : (
          <ShortsEditor />
        )
      }
    </S.Container>
  );
}

export default Write