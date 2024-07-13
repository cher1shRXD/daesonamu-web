import { useState } from "react"
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import * as S from './style';
import NotificationService from "../../libs/toastify/notificationService";


const Login = () => {

  const [studentId,setStudentId] = useState('');
  const [userPw,setUserPw] = useState('');
  const navigate = useNavigate();

  const { login,loading } = useLogin();

  const submit = async () => {
    try{
      const res = await login(studentId,userPw);
      localStorage.setItem('ACCESS_TOKEN',res.accessToken);
      localStorage.setItem("REFRESH_TOKEN", res.refreshToken);
      NotificationService.success('로그인 성공');
      navigate('/');
    }catch(err:any){
      if(err.response.status === 404) {
        NotificationService.error('유저를 찾을 수 없습니다.');
      }
      if(err.response.status === 401) {
        NotificationService.error('비밀번호가 틀립니다.');
      }
      console.log(err);
    }
  }

  const onEnter = (e:any) => {
    if(e.key === 'Enter') {
      submit();
    }
  }

  return (
    <S.Canvas>
      <S.Title>Welcome Back! 🎉</S.Title>
      <S.Input
        type="text"
        onChange={(e) => {
          setStudentId(e.target.value);
        }}
        onKeyDown={onEnter}
        placeholder="학번"
      />
      <S.Input
        type="password"
        onChange={(e) => {
          setUserPw(e.target.value);
        }}
        onKeyDown={onEnter}
        placeholder="비밀번호"
      />
      <S.Button onClick={submit} disabled={loading}>
        {!loading ? "로그인" : "로그인중..."}
      </S.Button>
      <S.Link
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원이 아니신가요?
      </S.Link>
    </S.Canvas>
  );
}

export default Login