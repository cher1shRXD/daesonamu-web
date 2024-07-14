import { useEffect, useState } from 'react';
import * as S from './style';
import { Board } from '../../interfaces/board';
import BoardBox from '../../components/BoardBox';
import MealBox from '../../components/MealBox';
import useGetFreeBoards from '../../hooks/useGetFreeBoards';
import { useNavigate } from 'react-router-dom';
import RankBox from '../../components/RankBox';
import useGetCodingBoards from '../../hooks/useGetCodingBoards';

const Home = () => {

  const [freeBoard,setFreeBoard] = useState<Board[]>();
  const [codingBoard, setCodingBoard] = useState<Board[]>();
  

  const { getFreeBoards } = useGetFreeBoards(); 
  const { getCodingBoards } = useGetCodingBoards(); 
  const navigate = useNavigate();

  const freeBoardReq = async () => {
    const res = await getFreeBoards();
    setFreeBoard(res);
  }

  const shortsBoardReq = async () => {
    const res = await getCodingBoards();
    setCodingBoard(res);
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
          {freeBoard?.slice(0, 4).map((item) => (
            <BoardBox
              title={item.title}
              author={item.author}
              createdAt={item.createdAt}
              key={item.id}
              id={item.id}
              detail={item.detail}
              likesCount={item.likesCount}
              category={item.category}
            />
          ))}
        </S.BoardWrap>
        <S.BoardWrap style={{ marginTop: "2rem" }}>
          <S.WrapTitle
            onClick={() => {
              navigate("/coding-board");
            }}
            style={{ cursor: "pointer" }}
          >
            코딩게시판 {">"}
          </S.WrapTitle>
          {codingBoard?.slice(0, 4).map((item) => (
            <BoardBox
              title={item.title}
              author={item.author}
              createdAt={item.createdAt}
              key={item.id}
              id={item.id}
              detail={item.detail}
              likesCount={item.likesCount}
              category={item.category}
            />
          ))}
        </S.BoardWrap>
      </S.BoardArea>
      <S.MealWrap>
        <S.WrapTitle>오늘의 급식</S.WrapTitle>
        <MealBox />
      </S.MealWrap>
      <S.RankWrap>
        <S.WrapTitle>대추랭킹</S.WrapTitle>
        <RankBox />
      </S.RankWrap>
    </S.Container>
  );
}

export default Home