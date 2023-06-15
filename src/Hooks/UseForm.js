import React from "react";
import {isValidEmail, isValidPassword} from "../helpers";
import {cpf} from "cpf-cnpj-validator";

const types = {
  email: {
    message: "Preencha um email válido",
    isValid: (email) => isValidEmail(email),
  },
  password: {
    message:
      "A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.",
    isValid: (password) => isValidPassword(password),
  },
  cpf: {
    message: "Preencha um CPF válido",
    isValid: (value) => cpf.isValid(value.replace(/\D/g, "")),
  },
};

const useForm = (type, isRequired = false) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (!type && !isRequired) return true;

    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].isValid(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({target}) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
