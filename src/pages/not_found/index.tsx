import * as S from './style';

const NotFound = () => {


  return (
    <S.Container>
      <S.Title>404 Not Found {":("}</S.Title>
      <S.Information>존재하지 않는 페이지 입니다.</S.Information>
    </S.Container>
  );
}

export default NotFound