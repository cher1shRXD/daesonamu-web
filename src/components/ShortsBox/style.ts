import styled from "@emotion/styled";

export const Container = styled.div`
  aspect-ratio:1/2;
  max-width:90%;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  padding: 10rem 0;
  box-sizing: border-box;
  background-color:transparent;
`;

export const ShortsBox = styled.div`
  width:100%;
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
  text-align:center;
`

export const Info = styled.div`
  width:100%;
  min-height:3rem;
  font-size:1.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:1rem;
`
export const Detail = styled.div`
  width:100%;
  height:70%;
  text-align:center;
  padding: 0 1rem;
  box-sizing: border-box;
  font-size:1.5rem;
`