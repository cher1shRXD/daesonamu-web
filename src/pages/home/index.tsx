import { useEffect, useState } from 'react';
import * as S from './style';
import { Board } from '../../interfaces/board';
import BoardBox from '../../components/BoardBox';
import MealBox from '../../components/MealBox';
import useGetFreeBoards from '../../hooks/useGetFreeBoards';
import useGetShortsBoards from '../../hooks/useGetShortsBoards';
import { useNavigate } from 'react-router-dom';
import RankBox from '../../components/RankBox';

const Home = () => {

  const [freeboard,setFreeBoard] = useState<Board[]>();
  const [shortsboard, setShortsBoard] = useState<Board[]>();
  

  const { getFreeBoards } = useGetFreeBoards(); 
  const { getShortsBoards } = useGetShortsBoards(); 
  const navigate = useNavigate();

  const freeBoardReq = async () => {
    try{
      const res = await getFreeBoards();
      setFreeBoard(res);
    }catch(err){
      console.log(err);
    }
  }

  const shortsBoardReq = async () => {
    try {
      const res = await getShortsBoards();
      setShortsBoard(res);
    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(()=>{
    freeBoardReq();
    shortsBoardReq();
  },[]);


  return (
    <S.Container>
      <S.BoardArea>
        <S.BoardWrap>
          <S.WrapTitle
            onClick={() => {
              navigate("/free-board");
            }}
            style={{ cursor: "pointer" }}
          >
            자유게시판 {">"}
          </S.WrapTitle>
          {freeboard?.slice(0, 4).map((item) => (
            <BoardBox
              title={item.title}
              author={item.author}
              createdAt={item.createdAt}
              key={item.id}
              id={item.id}
              detail={item.detail}
              likesCount={item.likesCount}
            />
          ))}
        </S.BoardWrap>
        <S.BoardWrap style={{ marginTop: "2rem" }}>
          <S.WrapTitle
            onClick={() => {
              navigate("/shorts");
            }}
            style={{ cursor: "pointer" }}
          >
            쇼츠게시판 {">"}
          </S.WrapTitle>
          {shortsboard?.slice(0, 4).map((item) => (
            <BoardBox
              title={item.title}
              author={item.author}
              createdAt={item.createdAt}
              key={item.id}
              id={item.id}
              detail={item.detail}
              likesCount={item.likesCount}
            />
          ))}
        </S.BoardWrap>
      </S.BoardArea>
      <S.MealWrap>
        <S.WrapTitle>오늘의 급식</S.WrapTitle>
        <MealBox />
      </S.MealWrap>
      <S.RankWrap>
        <S.WrapTitle>개추랭킹</S.WrapTitle>
        <RankBox />
      </S.RankWrap>
    </S.Container>
  );
}

export default Home