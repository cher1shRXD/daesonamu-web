import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Canvas = styled.div`
  width: 8rem;
  transition: all 0.5s 0.1s;
  &:hover {
    width: 25rem;
  }
  height: 100vh;
  background-color: white;
  box-shadow: 0.1rem 0.1rem 1rem 0.01rem #f1f1f1;
  overflow: hidden;
  padding: 3rem 1rem;
  box-sizing: border-box;
  position:fixed;
  top:0;
  left:0;
  z-index:9999;
`;

export const Menu = styled(Link)`
  width: 23rem;
  height: 6rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #f1f1f1;
  }
  transition: all 0.3s;
  border-radius: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 2rem 0;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 4rem;
  margin: 0;
`;
export const MenuText = styled.span`
  font-size: 1.5rem;
  margin: 0;
  margin-left: 3rem;
`;
