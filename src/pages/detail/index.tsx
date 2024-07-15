import { useNavigate, useParams } from "react-router-dom"
import * as S from './style'
import { useEffect, useState } from "react";
import useGetBoardDetail from "../../hooks/useGetBoardDetail";
import { Board } from "../../interfaces/board";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import useDeleteBoard from "../../hooks/useDeleteBoard";
import NotificationService from "../../libs/toastify/notificationService";
import '../../customMarkdown.css'
import { User } from "../../interfaces/user";
import useGetUser from "../../hooks/useGetUser";
import LikeBtn from "../../components/LikeBtn";

const Detail = () => {

  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  const mdParser = new MarkdownIt();

  const param = useParams();
  const { getBoardDetail, loading } = useGetBoardDetail();
  const { getUser } = useGetUser();
  const { deleteBoard } = useDeleteBoard();
  const navigate = useNavigate();


  const [detail, setDetail] = useState<Board>();
  const [user, setUser] = useState<User | null>();

  const boardReq = async () => {
    try{
      const res = await getBoardDetail(Number(param.id));
      setDetail(res);
    }catch(err:any){
      if(err === undefined) {
        navigate('/not-found');
      }
      if(err.response.data.message === 'Invalid refresh token') {
        NotificationService.warn('토큰이 만료되었습니다.');
        navigate('/login');
      }else{
        NotificationService.error('네트워크 에러');
      }
    }
  }

  const userReq = async () => {
    try{
      const res = await getUser();
      setUser(res);
    }catch(err:any){
      if (err.response.data.message === "Invalid refresh token") {
        NotificationService.warn("토큰이 만료되었습니다.");
        navigate("/login");
      } else {
        NotificationService.error("네트워크 에러");
      }
    }
  }

  const deleteReq = async () => {
    try{
      await deleteBoard(Number(param.id));
      NotificationService.success('삭제가 완료되었습니다.');
      navigate('/');
    }catch(err:any) {
      if (err.response.data.message === "Invalid refresh token") {
        NotificationService.warn("토큰이 만료되었습니다.");
        navigate("/login");
      } else {
        NotificationService.error("네트워크 에러");
      }
    }
  }

  const editReq = async () => {
    navigate(`/edit/${param.id}`);
  }

  useEffect(()=>{
    const accessToken = localStorage.getItem("ACCESS_TOKEN")
    try{
      boardReq();
      if(accessToken && accessToken !== null) {
        userReq();
      }
    }catch(err){
      NotificationService.error('요청실패');
    }
  },[]);


  return (
    <S.Cotainer>
      {!loading ? (
        <>
          {detail && user && detail.author?.id === user.id && (
            <S.ManagePostWrap>
              <S.ManagePost onClick={editReq}>수정</S.ManagePost>
              <S.ManagePost onClick={deleteReq}>삭제</S.ManagePost>
            </S.ManagePostWrap>
          )}
          <S.PostInfoWrap>
            <S.Title>{detail?.title}</S.Title>
            <S.PostInfo>
              {detail?.author?.username} - {detail?.createdAt}
            </S.PostInfo>
          </S.PostInfoWrap>
          <MdEditor
            value={detail?.detail}
            style={{
              height: "100%",
              border: "none",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
            renderHTML={(text) => mdParser.render(text)}
            config={{
              view: {
                md: false,
                menu: false,
                html: true,
              },
            }}
          />
        </>
      ) : (
        <div>로딩중...</div>
      )}
      {accessToken !== null && accessToken && detail && (
        <LikeBtn
          boardId={Number(detail?.id)}
          likes={detail.likesCount}
        />
      )}
    </S.Cotainer>
  );
}

export default Detail