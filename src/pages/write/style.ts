import styled from "@emotion/styled";

export const Container = styled.div`
  margin-left: 8rem;
  margin-top: 10rem;
  width: calc(100% - 8rem);
  min-height: calc(100vh - 10rem);
  display:flex;
  padding: 1rem 4rem 0 4rem;
  box-sizing: border-box;
  flex-direction:column;
  flex-wrap:wrap;
`;

export const WriteOptionWrap = styled.div`
  width:100%;
  height:5rem;
  display:flex;
  justify-content:flex-end;
  align-items:flex-end;
`

export const SelectBox = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #F1F1F1;
  font-size: 16px;
  color: #333;
  outline: none;
  border:none;
`;

export const Option = styled.option`
  padding: 10px;
  font-size: 16px;
`;