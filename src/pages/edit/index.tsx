import { useNavigate } from "react-router-dom";
import NotificationService from "../../libs/toastify/notificationService";
import { useEffect } from "react";
import * as S from "./style";
import PostEditor from "../../components/PostEditor";

const Edit = () => {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === undefined) {
      NotificationService.warn("로그인 후 이용해 주세요.");
      navigate("/");
    }
  }, []);

  return (
    <S.Container>
      <PostEditor />
    </S.Container>
  );
};

export default Edit;
