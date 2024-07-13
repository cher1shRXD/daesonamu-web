import styled from "@emotion/styled";

export const Container = styled.div`
  margin-left: 8rem;
  margin-top: 10rem;
  width: calc(100% - 8rem);
  min-height: calc(100vh - 10rem);
  display: flex;
  padding: 1rem 4rem 0 4rem;
  box-sizing: border-box;
  flex-direction: column;
`;

export const UserInfoArea = styled.div`
  max-width:70rem;
  width:90%;
  margin: 0 auto;
  min-height:10rem;
  flex-wrap:wrap;
  display:flex;
  align-items: center;
  justify-content:space-between;
`

export const Username = styled.h1`
  font-size:3rem;
  margin:0;
`

export const StudentId = styled.p`
  font-size:1.5rem;
  margin:0;
  color:gray;
`

export const LogOutBtn = styled.button`
  padding: 1rem 2rem;
  background-color: #ff6969;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  margin-top: 2rem;
  &:active {
    background-color: #c80036;
  }
  &:disabled {
    background-color: #c80036;
  }
`;

export const MyPostsArea = styled.div`
  max-width:70rem;
  width:90%;
  margin: 0 auto;
  margin-top:2rem;
`
export const MyPostsTitle = styled.h3`
  font-size:2rem;
  margin:0;
  padding-bottom:1rem;
  border-bottom: 0.1rem solid #ccc;
`