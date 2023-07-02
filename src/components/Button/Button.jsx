import { Button } from "./Button.styles";
import { bool, func, string } from "prop-types";
import { Oval } from "react-loader-spinner";

import Colors from "../../Theme/Colors";
import ConditionalComponent from "../ConditionalComponent";

const LoadingIcon = (
  <Oval height={"1.5rem"} color={"white"} secondaryColor={Colors.dark} />
);

export default function ButtonComponent({ text, onClick, disabled, loading }) {
  return (
    <Button onClick={onClick} disabled={disabled || loading}>
      <ConditionalComponent
        condition={loading}
        value1={LoadingIcon}
        value2={text}
      />
    </Button>
  );
}

ButtonComponent.propTypes = {
  text: string.isRequired,
  disabled: bool,
  onClick: func,
  loading: bool,
};
