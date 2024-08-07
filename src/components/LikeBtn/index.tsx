import { useEffect, useState } from 'react';
import * as S from './style';
import instance from '../../libs/axios/customAxios';
import NotificationService from '../../libs/toastify/notificationService';
import { useNavigate } from 'react-router-dom';

const LikeBtn = (props:{boardId:number,likes:number}) => {

  const [loading, setLoading] = useState<boolean>();
  const [likeStatus, setLikeStatus] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState(props.likes);

  const navigate = useNavigate();

  const checkLike = async () => {
    await instance.get(`/likes/${props.boardId}`)
    .then((res)=>{
      setLikeStatus(res.data);
    })
    .catch((err)=>{
      if(err.response.data.message === 'Invalid refresh token') {
        navigate('/login');
      }else{
        NotificationService.error('네트워크 에러');
      }
    })
  }

  useEffect(()=>{
    checkLike();
  },[]);


  const likeAction = async () => {
    setLoading(true);
    await instance.post(`/likes/${props.boardId}`)
    .then((res)=>{
      setLikeCount(res.data);
      setLikeStatus(true);
    })
    .catch((err)=>{
      if(err.response.data.message === 'Invalid refresh token') {
        NotificationService.warn('토큰이 만료되었습니다.');
        navigate('/login');
      }
      NotificationService.error("네트워크 에러");
    })
    .finally(()=>{
      setLoading(false);
    });
  }


  const dislikeAction = async () => {
    setLoading(true);
    await instance.delete(`/likes/${props.boardId}`)
    .then((res) => {
      setLikeCount(res.data);
      setLikeStatus(false);
    })
    .catch((err) => {
      if (err.response.data.message === "Invalid refresh token") {
        NotificationService.warn("토큰이 만료되었습니다.");
        navigate("/login");
      }
      NotificationService.error("네트워크 에러");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const submit = () => {
    if(likeStatus){
      dislikeAction();
    }else{
      likeAction();
    }
  }


  return (
    <S.Container>
      <S.LikeBtn
        color={likeStatus ? "#ff6969" : "#80af81"}
        hoverColor={likeStatus ? "#c80036" : "#508d4e"}
        disabled={loading}
        onClick={submit}
      >
        {likeCount} 소나무
      </S.LikeBtn>
    </S.Container>
  );
}

export default LikeBtn