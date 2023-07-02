import React from "react";
import { isValidEmail, isValidPassword, isValidPhone } from "../helpers";
import { cpf } from "cpf-cnpj-validator";

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
  phone: {
    message: 'Preencha um Telefone Fixo válido',
    isValid: (phone) => isValidPhone(phone)
  },
  cellphone: {
    message: 'Preencha um Telefone Celular válido',
    isValid: (phone) => isValidPhone(phone, true)
  }
};

const useForm = (type, isRequired = true) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (!type && !isRequired) return true;

    if (type && !isRequired) {
      if (value && !types[type].isValid(value)) {
        setError(types[type].message);
        return false;
      }
      return true;
    }

    if (value.length === 0 && isRequired) {
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

  function onChange({ target }) {
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
