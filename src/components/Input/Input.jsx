import { useState } from "react";
import { func, object, string } from "prop-types";
import { formatCPF, formatEmail } from "../../helpers";
import {
  AiFillEye, AiFillEyeInvisible
} from "react-icons/ai"

import { InputWrapper, Label, Input, Error, Wrapper, PasswordIcon } from "./Input.styles";

function formatInput(formatType, value) {
  if (!formatType) return value;

  const obj = {
    cpf: formatCPF(value),
    email: formatEmail(value),
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
  const [showPassword, setShowPassword] = useState(false)

  return (
    <InputWrapper style={style}>
      <Label htmlFor={label}>{label}</Label>
      <Wrapper >
        <Input
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          id={label}
          value={formatInput(formatType, value)}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />

        {type === 'password' && showPassword && (
          <PasswordIcon type="button" onClick={() => setShowPassword(!showPassword)} >
            <AiFillEye />
          </PasswordIcon>
        )}

        {type === 'password' && !showPassword && (
          <PasswordIcon type="button" onClick={() => setShowPassword(!showPassword)} >
            <AiFillEyeInvisible />
          </PasswordIcon>
        )}
      </Wrapper>
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
