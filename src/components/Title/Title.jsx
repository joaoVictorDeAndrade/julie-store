import {Wrapper, Title, Line} from "./Title.style";
import {string} from "prop-types";

export default function TitleComponent({text, fontSize = "1.5rem"}) {
  return (
    <Wrapper>
      <Title style={{fontSize}}>{text}</Title>
      <Line />
    </Wrapper>
  );
}

TitleComponent.propTypes = {
  text: string.isRequired,
  fontSize: string,
};
