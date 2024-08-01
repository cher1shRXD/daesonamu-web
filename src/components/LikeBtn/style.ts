import styled from "@emotion/styled";

interface Color {
  color:string;
  hoverColor:string;
}

export const Container = styled.div`
  width:100%;
  height:10rem;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const LikeBtn = styled.button`
  padding: 0.5rem 3rem;
  background-color: white;
  border: 0.1rem solid ${(props:Color) => props.color};
  color: ${(props:Color) => props.color};
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  &:active {
    border: 0.1rem solid ${(props:Color) => props.hoverColor};
    color: ${(props:Color) => props.hoverColor};
  }
  &:disabled {
    border: 0.1rem solid ${(props:Color) => props.hoverColor};
    color: ${(props:Color) => props.hoverColor};
  }
`;
