import { useEffect, useState } from "react";
import { Board } from "../../interfaces/board";
import NotificationService from "../../libs/toastify/notificationService";
import * as S from "./style";
import BoardBox from "../../components/BoardBox";
import useGetCodingBoards from "../../hooks/useGetCodingBoards";

const CodingBoard = () => {
  const [board, setBoard] = useState<Board[]>();

  const { getCodingBoards } = useGetCodingBoards();

  const boardReq = async () => {
    try {
      const res = await getCodingBoards();
      setBoard(res);
    } catch {
      NotificationService.error("네트워크 에러");
    }
  };

  useEffect(() => {
    boardReq();
  }, []);

  return (
    <S.Cotainer>
      <S.BoardArea>
        <S.PageTitle>코딩게시판</S.PageTitle>
        {board?.map((item) => (
          <BoardBox
            title={item.title}
            detail={item.detail}
            id={item.id}
            key={item.id}
            createdAt={item.createdAt}
            author={item.author}
            likesCount={item.likesCount}
            category={item.category}
          />
        ))}
      </S.BoardArea>
    </S.Cotainer>
  );
};

export default CodingBoard;
