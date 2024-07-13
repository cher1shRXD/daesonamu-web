import styled from "@emotion/styled";

export const Container = styled.div`
  width:100%;
  min-height:6rem;
  display:flex;
  box-sizing:border-box;
  border-bottom:0.1rem solid #F1F1F1;
  padding: 0.5rem 1rem;
  transition:all 0.5s;
  &:hover {
    background-color:#F1F1F1;
  }
  flex-direction:column;
  cursor: pointer;
`
export const Title = styled.h3`
  font-size:2rem;
  margin:0;
  align-items:flex-start;
`
export const InfoWrap = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  margin:0;
`
export const Info = styled.p`
  margin:0;
`