import styled from "@emotion/styled";

export const Container = styled.div`
  width: 90%;
  height: calc(100vh - 30rem);
`;
export const TitleInput = styled.input`
  width: 40%;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  padding: 1rem 1rem;
  border-bottom: 0.1rem solid #ccc;
`;
export const SubmitBtn = styled.button`
  padding: 1rem 2rem;
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

export const MarkdownWrap = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 30rem);
  align-items: flex-end;
  justify-content: space-between;
`;
