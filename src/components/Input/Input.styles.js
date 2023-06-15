import Colors from "../../Theme/Colors";
import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1.2;
  padding-bottom: 0.5rem;
  padding-left: 0.85rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${Colors.inputBackground};
  display: block;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 1.5rem;
  background: ${Colors.inputBackground};
  transition: 0.2s;
  &:hover {
    outline: none;
    border-color: ${Colors.primary};
  }
  &:focus {
    outline: none;
    border-color: ${Colors.primary};
  }
`;

export const Error = styled.p`
  color: ${Colors.attention};
  font-size: 0.875rem;
  padding-left: 0.85rem;
  margin-top: 5px;
`;
