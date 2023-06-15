import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  margin-left: 15vw;
  overflow: hidden;
  transition: all 0.4s;

  @media (max-width: 768px) {
    margin-left: 60px;
  }
`;

export const WrapperChildren = styled.div`
  margin-top: 5rem;
  padding: 2rem;
`;
