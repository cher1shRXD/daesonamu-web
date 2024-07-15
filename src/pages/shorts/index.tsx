import { useEffect, useState } from 'react';
import useGetShortsBoards from '../../hooks/useGetShortsBoards';
import * as S from './style';
import { Board } from '../../interfaces/board';
import ShortsBox from '../../components/ShortsBox';
import NotificationService from '../../libs/toastify/notificationService';
import { useNavigate } from 'react-router-dom';

const Shorts = () => {
  const [board, setBoard] = useState<Board[]>();

  const { getShortsBoards } = useGetShortsBoards();
  const navigate = useNavigate();

  const boardReq = async () => {
    try{
      const res = await getShortsBoards();
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

  const shuffle = (array:Board[]) => {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <S.Cotainer>
      {board && shuffle && shuffle(board).map((item)=>(
        <ShortsBox key={item.id} id={item.id} title={item.title} likesCount={item.likesCount} detail={item.detail} author={item.author} createdAt={item.createdAt} category={item.category}/>
      ))}
    </S.Cotainer>
  )
}

export default Shorts