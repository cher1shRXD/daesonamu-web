import styled from "@emotion/styled";

export const Cotainer = styled.div`
  margin-left: 8rem;
  margin-top: 10rem;
  width: calc(100% - 8rem);
  height: calc(100vh - 10rem);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 10rem 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
