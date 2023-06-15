import {Oval} from "react-loader-spinner";
import Colors from "../../Theme/Colors";
import {string} from "prop-types";

import {Loading} from "./Loading.styles";

export default function LoadingComponent({
  height = "1.5rem",
  color = "white",
  secondaryColor = Colors.dark,
}) {
  return (
    <Loading>
      <Oval height={height} color={color} secondaryColor={secondaryColor} />
    </Loading>
  );
}

LoadingComponent.propTypes = {
  height: string,
  color: string,
  secondaryColor: string,
};
