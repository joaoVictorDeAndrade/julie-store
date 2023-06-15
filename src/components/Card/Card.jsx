import {Card} from "./Card.styles";
import {element} from "prop-types";

export default function CardComponent({children}) {
  return <Card>{children}</Card>;
}

CardComponent.propTypes = {
  children: element.isRequired,
};
