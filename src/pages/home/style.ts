import styled from "@emotion/styled";

export const Container = styled.div`
  margin-left: 8rem;
  margin-top: 10rem;
  width:calc(100% - 8rem);
  min-height:calc(100vh - 10rem);
  display: flex;
  flex-wrap:wrap;
  padding: 2rem 2rem 0 2rem;
  box-sizing:border-box;
`

export const BoardArea = styled.div`
  max-width: 70rem;
  width:100%;
  min-height: 67rem;
  display:flex;
  flex-direction:column;
  align-items: center;
  
`

export const BoardWrap = styled.div`
  max-width: 65rem;
  width:90%;
  min-height: 32rem;
`;
export const WrapTitle = styled.h3`
  margin: 0%;
  font-size:2rem;
  padding-bottom:1rem;
  border-bottom:0.1rem solid #ccc;
  height:2rem;
`

export const MealWrap = styled.div`
  width:30rem;
  height:55rem;
  box-sizing:border-box;
`