import React from "react";
import {func, object, string} from "prop-types";
import {formatCPF} from "../../helpers";

import {InputWrapper, Label, Input, Error} from "./Input.styles";

function formatInput(formatType, value) {
  if (!formatType) return value;

  const obj = {
    cpf: formatCPF(value),
    cep: "",
  };

  return obj[formatType];
}

export default function InputComponent({
  label,
  type,
  value,
  error,
  onChange,
  onBlur,
  style,
  formatType,
  ...props
}) {
  return (
    <InputWrapper style={style}>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        id={label}
        value={formatInput(formatType, value)}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
}

InputComponent.propTypes = {
  label: string,
  type: string,
  value: string.isRequired,
  error: string,
  onChange: func.isRequired,
  onBlur: func,
  style: object,
  formatType: string,
};
