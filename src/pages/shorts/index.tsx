import { useEffect, useState } from 'react';
import useGetShortsBoards from '../../hooks/useGetShortsBoards';
import * as S from './style';
import { Board } from '../../interfaces/board';
import ShortsBox from '../../components/ShortsBox';

const Shorts = () => {
  const [board, setBoard] = useState<Board[]>();

  const { getShortsBoards } = useGetShortsBoards();


  const boardReq = async () => {
    const res = await getShortsBoards();
    setBoard(res);
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
        <ShortsBox key={item.id} id={item.id} title={item.title} likesCount={item.likesCount} detail={item.detail} author={item.author} createdAt={item.createdAt} />
      ))}
    </S.Cotainer>
  )
}

export default Shorts