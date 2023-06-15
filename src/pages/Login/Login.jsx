import {app} from "../../firebaseConfig";
import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
import {Navigate} from "react-router-dom";
import UseForm from "../../Hooks/UseForm";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Logo from "../../assets/svgs/Logo";

import {
  Container,
  Form,
  FormWrapper,
  ImageContainer,
  InputsContainer,
} from "./Login.styles";

export default function Login() {
  const email = UseForm("email");
  const password = UseForm("password");

  const {loginWithEmail, login, loading} = useContext(UserContext);

  const handleLogin = e => {
    e.preventDefault();
    if (email.validate() && password.validate()) {
      loginWithEmail(email.value, password.value);
    }
  };

  if (login) return <Navigate to="/dashboard" />;

  return (
    <Container>
      <FormWrapper>
        <ImageContainer>
          <Logo />
        </ImageContainer>
        <InputsContainer>
          <Form>
            <Input label="E-mail" {...email} />
            <Input label="Senha" type="password" {...password} />
            <Button text="Entrar" onClick={handleLogin} loading={loading} />
          </Form>
        </InputsContainer>
      </FormWrapper>
    </Container>
  );
}
