import styled from "@emotion/styled";

export const Cotainer = styled.div`
  margin-left: 8rem;
  margin-top: 10rem;
  width: calc(100% - 8rem);
  min-height: calc(100vh - 10rem);
  padding: 0 2rem;
  box-sizing:border-box;
`;

export const PostInfoWrap = styled.div`
  width:100%;
  height:12rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-bottom: 0.1rem solid #ccc;
`

export const Title = styled.h1`
  font-size:3rem;
  margin:0;
`

export const PostInfo = styled.p`
  font-size:2rem;
  margin:0;
`

export const ManagePostWrap = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  height:5rem;
  align-items:flex-end;
`
export const ManagePost = styled.p`
  font-size:1.7rem;
  margin:0 1rem;
  color:gray;
  cursor: pointer;
  &:hover {
    text-decoration:underline;
  }
`