import { Board } from '../../interfaces/board';
import LikeBtn from '../LikeBtn';
import * as S from './style';

const ShortsBox = (props:Board) => {

  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  return (
    <S.Container>
      <S.ShortsBox>
        <S.Title>{props.title}</S.Title>
        <S.Info>
          {props.author?.username} - {props.createdAt}
        </S.Info>
        <S.Detail>{props.detail}</S.Detail>
        {accessToken !== null && accessToken && props && (
          <LikeBtn boardId={Number(props.id)} likes={props.likesCount} />
        )}
      </S.ShortsBox>
    </S.Container>
  );
}

export default ShortsBox;