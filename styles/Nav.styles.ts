import styled from "styled-components";
import Link from "next/link";

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  background: #00022e;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  color: #fc86aa;
`;

export const NavTitle = styled.h1`
  color: pink;
  font-size: 2rem;
  color: #fff;
  font-weight: 200;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe,
    0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
`;
