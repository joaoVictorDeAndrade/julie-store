import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 15vw;
  height: calc(100vh - 5rem);
  background-color: ${Colors.shape};
  box-shadow: 0 10px 3px -1px #333333;
  position: fixed;
  top: 5rem;
  z-index: 999;
  overflow-x: hidden;
  transition: all 0.4s;

  @media (max-width: 768px) {
    width: 60px;
    nav > ul > a > span {
      display: none;
    }
  }
`;

export const Navigate = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
