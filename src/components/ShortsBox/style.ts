import styled from "@emotion/styled";

export const Container = styled.div`
  min-width: 25rem;
  width: 25%;
  height: calc(100vh - 10rem);
  scroll-snap-align: start;
  margin: 0 auto;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  padding: 10rem 0;
  box-sizing: border-box;
`;

export const ShortsBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.01rem #f1f1f1;
  border: 0.1rem solid #f1f1f1;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color: white;
`;

export const Title = styled.h1`
  font-size:3rem;
`

export const Info = styled.div`
  width:100%;
  height:3rem;
  font-size:1.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Detail = styled.div`
  width:100%;
  height:70%;
  text-align:center;
`