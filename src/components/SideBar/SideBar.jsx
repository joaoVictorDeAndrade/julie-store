import {SideBar, Navigate, NavList} from "./SideBar.styles";
import {Link} from "react-router-dom";
import {FaHome, FaListUl} from "react-icons/fa";
import {BsPersonAdd} from "react-icons/bs";
import Colors from "../../Theme/Colors";

const iconStyle = {
  width: "32px",
  height: "32px",
  marginRight: "8px",
  color: `${Colors.primary}`,
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  margin: "8px 0",
  fontSize: "1.2rem",
  color: "black",
};

const navItems = [
  {
    route: "/",
    label: "Home",
    icon: <FaHome style={iconStyle} />,
  },
  {
    route: "/clientes/adicionar",
    label: "Adicionar Cliente",
    icon: <BsPersonAdd style={iconStyle} />,
  },
  {
    route: "/clientes",
    label: "Ver Clientes",
    icon: <FaListUl style={iconStyle} />,
  },
];

export default function SideBarComponent() {
  return (
    <SideBar>
      <Navigate>
        <NavList>
          {navItems.map((item) => (
            <Link
              style={linkStyle}
              className="link-sidebar"
              to={item.route}
              key={item.route}>
              <i>{item.icon}</i>
              <span>{item.label}</span>
            </Link>
          ))}
        </NavList>
      </Navigate>
    </SideBar>
  );
}
