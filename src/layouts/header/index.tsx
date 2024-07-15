import * as S from "./style";
import Logo from "../../assets/logo/icon.png";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <S.Canvas>
      <S.Image src={Logo} onClick={()=>{navigate('/')}}/>
    </S.Canvas>
  );
};
export default Header;
