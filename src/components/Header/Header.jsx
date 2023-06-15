import {Header, Button, Title} from "./Header.styles";
import {FiLogOut} from "react-icons/fi";
import Colors from "../../Theme/Colors";

import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
import {useNavigate} from "react-router-dom";

export default function HeaderComponent() {
  const {logout} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Header>
      <span />
      <Title>Julie Store</Title>
      <Button onClick={handleLogout}>
        <FiLogOut color={Colors.font1} />
      </Button>
    </Header>
  );
}
