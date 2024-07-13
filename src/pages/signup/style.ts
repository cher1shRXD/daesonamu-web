import styled from "@emotion/styled";

export const Canvas = styled.div`
  width:100vw;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`

export const Input = styled.input`
  font-size: 2.5rem;
  margin-top: 2.8rem;
  padding: 0.5rem 0.5rem;
  border:none;
  border-bottom: 0.1rem black solid;
  max-width: 50rem;
  width:90%;
  box-sizing: border-box;
  outline:none;
`
export const Button = styled.button`
  margin-top: 5rem;
  max-width: 50rem;
  width:90%;
  font-size: 2.5rem;
  color: white;
  background-color: #80af81;
  padding: 1rem 0;
  border: none;
  border-radius: 1rem;
  &:active {
    background-color: #508d4e;
  }
  &:disabled {
    background-color: #508d4e;
  }
  cursor: pointer;
`;

export const Link = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
  color: gray;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const WarnMessage = styled.p`
  height: 2rem;
  margin-top: 5rem;
  max-width: 50rem;
  width: 100%;
  text-align: start;
  margin: 0;
  margin-top: 0.5rem;
  font-size: 1.3rem;
  color: red;
`;