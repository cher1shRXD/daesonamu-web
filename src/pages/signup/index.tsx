import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import NotificationService from "../../libs/toastify/notificationService";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [studentIdValid, setStudentIdValid] = useState(false);
  const [pwValid, setpwValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [pwChkValid, setpwChkValid] = useState(false);

  const [studentId, setStudentId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');


  const navigate = useNavigate();

  const { signup, loading } = useSignup();

  const submit = async () => {
    if(pwChkValid && pwValid && studentIdValid && usernameValid) {
      try {
        await signup(studentId, username, password);
        NotificationService.success("회원가입 성공");
        navigate("/login");
      } catch (err: any) {
        if (err.response.status === 404) {
          NotificationService.error("유저를 찾을 수 없습니다.");
        }
        if (err.response.status === 401) {
          NotificationService.error("비밀번호가 틀립니다.");
        }
        console.log(err);
      }
    }else{
      NotificationService.warn('모든 조건을 충족해주세요.')
    }
  };

  const handleStudentId = (e:any) => {
    const content = e.target.value;
    const regex = /^[1-3][1-4][0-1][1-9]$/;
    setStudentId(content);
    if(regex.test(content)) {
      setStudentIdValid(true);
    }else{
      setStudentIdValid(false);
    }
  }

  const handleUsername = (e: any) => {
    const content = e.target.value;
    setUsername(content);
    if (content.length >= 4) {
      setUsernameValid(true);
    } else {
      setUsernameValid(false);
    }
  };
  
  const handlePw = (e: any) => {
    const content = e.target.value;
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    setPassword(content);
    if (regex.test(content)) {
      setpwValid(true);
    } else {
      setpwValid(false);
    }
  };

  const handlePwChk = (e: any) => {
    const content = e.target.value;
    setPasswordChk(content);
    if (content === password) {
      setpwChkValid(true);
    } else {
      setpwChkValid(false);
    }
  };

  useEffect(()=>{
    if(password !== passwordChk) {
      setpwChkValid(false);
    }else{
      setpwChkValid(true);
    }
  },[password]);

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      submit();
    }
  };


  return (
    <S.Canvas>
      <S.Title>Hi There! 👋</S.Title>
      <S.Input
        type="text"
        placeholder="학번"
        onChange={handleStudentId}
        onKeyDown={onEnter}
      />
      <S.WarnMessage>
        {!studentIdValid &&
          studentId.length > 0 &&
          "4자리로 구성된 학번을 입력해주세요."}
      </S.WarnMessage>
      <S.Input
        type="text"
        placeholder="유저네임"
        onChange={handleUsername}
        onKeyDown={onEnter}
      />
      <S.WarnMessage>
        {!usernameValid && username.length > 0 && "4자 이상 입력해주세요."}
      </S.WarnMessage>
      <S.Input
        type="password"
        placeholder="비밀번호"
        onChange={handlePw}
        onKeyDown={onEnter}
      />
      <S.WarnMessage>
        {!pwValid &&
          password.length > 0 &&
          "8자 이상, 영문, 숫자, 특수문자를 포함해주세요."}
      </S.WarnMessage>
      <S.Input
        type="password"
        placeholder="비밀번호확인"
        onChange={handlePwChk}
        onKeyDown={onEnter}
      />
      <S.WarnMessage>
        {!pwChkValid &&
          passwordChk.length > 0 &&
          "비밀번호가 일치하지 않습니다."}
      </S.WarnMessage>
      <S.Button onClick={submit} disabled={loading}>
        {!loading ? "회원가입" : "회원가입중..."}
      </S.Button>
      <S.Link
        onClick={() => {
          navigate("/login");
        }}
      >
        이미 가입하셨나요?
      </S.Link>
    </S.Canvas>
  );
};

export default Signup;
