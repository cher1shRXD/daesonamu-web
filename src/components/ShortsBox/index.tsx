import { Board } from '../../interfaces/board';
import LikeBtn from '../LikeBtn';
import * as S from './style';

const ShortsBox = (props:Board) => {
  return (
    <S.Container>
      <S.ShortsBox>
        <S.Title>{props.title}</S.Title>
        <S.Info>
          {props.author?.username} - {props.createdAt}
        </S.Info>
        <S.Detail>{props.detail}</S.Detail>
        <LikeBtn likes={props.likesCount} boardId={props.id} />
      </S.ShortsBox>
    </S.Container>
  );
}

export default ShortsBox;