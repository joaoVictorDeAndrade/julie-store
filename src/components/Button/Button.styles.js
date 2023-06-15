import styled from "styled-components";
import Colors from "../../Theme/Colors";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${Colors.primary};
  min-width: 8rem;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.primary};
    box-shadow: 0 0 0 1px ${Colors.tertiary};
  }
`;
