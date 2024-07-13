import * as S from "./style";
import homeIcon from "../../assets/icons/home.svg";
import shortsIcon from "../../assets/icons/shorts.svg";
import writeIcon from "../../assets/icons/write.svg";
import boardIcon from "../../assets/icons/board.svg";
import userIcon from "../../assets/icons/user.svg";

const SideBar = () => {
  return (
    <S.Canvas>
      <S.Menu to="/">
        <S.Image src={homeIcon} />
        <S.MenuText>메인화면</S.MenuText>
      </S.Menu>
      <S.Menu to="/shorts">
        <S.Image src={shortsIcon} />
        <S.MenuText>쇼츠게시판</S.MenuText>
      </S.Menu>
      <S.Menu to="/free-board">
        <S.Image src={boardIcon} />
        <S.MenuText>자유게시판</S.MenuText>
      </S.Menu>
      <S.Menu to="/write">
        <S.Image src={writeIcon} />
        <S.MenuText>글작성</S.MenuText>
      </S.Menu>
      <S.Menu to="/user">
        <S.Image src={userIcon} />
        <S.MenuText>프로필</S.MenuText>
      </S.Menu>
    </S.Canvas>
  );
};

export default SideBar;
