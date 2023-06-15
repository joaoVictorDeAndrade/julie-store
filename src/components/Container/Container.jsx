import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import {element} from "prop-types";

import {Wrapper, Main, WrapperChildren} from "./Container.styles";

export default function Container({children}) {
  return (
    <Wrapper>
      <Header></Header>
      <SideBar></SideBar>
      <Main>
        <WrapperChildren>{children}</WrapperChildren>
      </Main>
    </Wrapper>
  );
}

Container.propTypes = {
  children: element.isRequired,
};
