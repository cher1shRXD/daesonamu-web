import * as S from "./style";
import Logo from "../../assets/logo/icon.png";

const Header = () => {
  return (
    <S.Canvas>
      <S.Image src={Logo} />
    </S.Canvas>
  );
};
export default Header;
