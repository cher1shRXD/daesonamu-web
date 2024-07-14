import { useEffect, useState } from 'react';
import useGetRankBoards from '../../hooks/useGetRankBoards';
import * as S from './style';
import { Board } from '../../interfaces/board';
import BoardBox from '../BoardBox';

const RankBox = () => {
  const [rank, setRank] = useState<Board[]>();

  const { getRankBoards } = useGetRankBoards();

  const rankReq = async () => {
    const res = await getRankBoards();
    setRank(res);
  }

  useEffect(()=>{
    rankReq();
  },[]);


  return (
    <S.RankBox>
      {rank?.slice(0, 10).map((item,idx) => (
        <S.RankerWrap key={item.id}>
          <S.RankNumWrap>{idx+1}</S.RankNumWrap>
          <BoardBox
            title={item.title}
            id={item.id}
            detail={item.detail}
            author={item.author}
            likesCount={item.likesCount}
            createdAt={item.createdAt}
          />
        </S.RankerWrap>
      ))}
    </S.RankBox>
  );
}

export default RankBox