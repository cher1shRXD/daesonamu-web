import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const TitleInput = styled.input`
  font-size: 2.5rem;
  padding: 1rem 1rem;
  max-width: 40rem;
  width:95%;
  border:none;
  border-bottom:0.1rem solid #ccc;
  outline:none;
  box-sizing:border-box;
`

export const DetailInput = styled.textarea`
  resize:none;
  max-width:40rem;
  width:95%;
  height:50rem;
  border: 0.1rem solid #ccc;
  box-sizing:border-box;
  margin-top: 1rem;
  outline:none;
  padding:1rem;
`
export const SubmitBtn = styled.button`
  padding: 1rem 0;
  max-width:40rem;
  width:95%;
  background-color: #80af81;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  margin-top: 2rem;
  &:active {
    background-color: #508d4e;
  }
  &:disabled {
    background-color: #508d4e;
  }
`;
