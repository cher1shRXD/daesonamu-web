import { useEffect, useState } from "react";
import useGetFreeBoards from "../../hooks/useGetFreeBoards"
import { Board } from "../../interfaces/board";
import NotificationService from "../../libs/toastify/notificationService";
import * as S from './style';
import BoardBox from "../../components/BoardBox";
import { useNavigate } from "react-router-dom";

const FreeBoard = () => {

  const [board, setBoard] = useState<Board[]>();

  const { getFreeBoards } = useGetFreeBoards();
  const navigate = useNavigate();

  const boardReq = async () => {
    try{
      const res = await getFreeBoards();
      setBoard(res);
    }catch(err:any){
      if (err.response.data.message === "Invalid refresh token") {
        NotificationService.warn("토큰이 만료되었습니다.");
        navigate("/login");
      } else {
        NotificationService.error("네트워크 에러");
      }
    }
  }

  useEffect(()=>{
    boardReq();
  },[]); 

  return (
    <S.Cotainer>
      <S.BoardArea>
        <S.PageTitle>자유게시판</S.PageTitle>
        {
          board?.map((item)=>(
            <BoardBox title={item.title} detail={item.detail} id={item.id} key={item.id} createdAt={item.createdAt} author={item.author} likesCount={item.likesCount} category={item.category}/>
          ))
        }
      </S.BoardArea>
    </S.Cotainer>
  )
}

export default FreeBoard