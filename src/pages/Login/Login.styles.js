import Colors from "../../Theme/Colors";
import imageLogin from "../../assets/images/imageLogin.jpg";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${imageLogin}) no-repeat center center;
  background-size: cover;
`;

export const FormWrapper = styled.div`
  width: 60%;
  height: 60%;
  background-color: white;
  border-radius: 24px;
  display: grid;
  grid-template-columns: 1.4fr 3fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  border-right: 1px solid ${Colors.gray};
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  margin: 0 40px;
`;
