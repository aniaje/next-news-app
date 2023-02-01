import styled from "styled-components";
import Link from "next/link";

export const Content = styled.div`
  h1 {
    padding-top: 1rem;
  }
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 970px) {
    width: 90%;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 4rem;
`;

export const Card = styled.div`
  width: 100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
    font-weight: 200;
    color: #efefef;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 0.9rem;
  color: lightskyblue;
`;
