import { useNavigate } from "react-router-dom"
import { Board } from "../../interfaces/board";
import { useEffect, useState } from "react";
import * as S from './style';
import { User } from "../../interfaces/user";
import instance from "../../libs/axios/customAxios";
import NotificationService from "../../libs/toastify/notificationService";
import BoardBox from "../../components/BoardBox";

const Profile = () => {

  const navigate = useNavigate();
  const [user,setUser] = useState<User>();

  const userReq = async () => {
    const res = await instance.get("/auth/me");
    console.log(res.data);
    setUser(res.data);
  }


  useEffect(()=>{
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    try{
      if(accessToken || accessToken !== null ) {
        userReq();
      }else{
        navigate('/login');
      }
    }catch(err){
      console.log(err);
    }
  },[]);

  useEffect(()=>{
    console.log(user?.board);
  },[user]);

  const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    NotificationService.success('로그아웃 성공');
    navigate('/')
  }



  return (
    <S.Container>
      <S.UserInfoArea>
        <S.Username>{user?.username}<S.StudentId>학번: {user?.studentId}</S.StudentId></S.Username>
        <S.LogOutBtn onClick={logout}>로그아웃</S.LogOutBtn>
      </S.UserInfoArea>
      <S.MyPostsArea>
        <S.MyPostsTitle>내가 쓴 글</S.MyPostsTitle>
        {user?.board.map((item: Board) => (
          <BoardBox
            title={item.title}
            detail={item.detail}
            id={item.id}
            createdAt={item.createdAt}
            key={item.id}
          />
        ))}
      </S.MyPostsArea>
    </S.Container>
  );
}

export default Profile;