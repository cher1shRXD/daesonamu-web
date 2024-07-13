import { useNavigate } from "react-router-dom";
import { Board } from "../../interfaces/board";
import * as S from './style'

const BoardBox = (props:Board) => {

  const navigate = useNavigate();

  const viewDetail = () => {
    navigate(`/free-board/${props.id}`);
  }

  return (
    <S.Container onClick={viewDetail}>
      <S.Title>{props.title}</S.Title>
      <S.InfoWrap>
        {props.author && <S.Info>작성자: {props.author.username}</S.Info>}
        <S.Info>{props.createdAt}</S.Info>
      </S.InfoWrap>
    </S.Container>
  );
}

export default BoardBox