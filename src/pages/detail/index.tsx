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

const Detail = () => {


  const mdParser = new MarkdownIt();

  const param = useParams();
  const { getBoardDetail, error, loading } = useGetBoardDetail();
  const { getUser } = useGetUser();
  const { deleteBoard } = useDeleteBoard();
  const navigate = useNavigate();


  const [detail, setDetail] = useState<Board>();
  const [user, setUser] = useState<User | null>();

  const boardReq = async () => {
    try{
      const res = await getBoardDetail(Number(param.id));
      setDetail(res);
    }catch{
      if(error === undefined) {
        navigate('/not-found');
      }
    }
  }

  const userReq = async () => {
    try{
      const res = await getUser();
      setUser(res);
    }catch(err){
      console.log(err);
    }
  }

  const deleteReq = async () => {
    try{
      await deleteBoard(Number(param.id));
      NotificationService.success('삭제가 완료되었습니다.');
      navigate('/');
    }catch(err){
      console.log(err);
    }
  }

  const editReq = async () => {
    navigate(`/edit/${param.id}`);
  }

  useEffect(()=>{
    try{
      boardReq();
      userReq();
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
              style={{ height: "100%", border: "none", textAlign:'center', display:'flex', justifyContent:'center'}}
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
    </S.Cotainer>
  );
}

export default Detail