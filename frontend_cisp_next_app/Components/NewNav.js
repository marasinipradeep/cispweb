import styled from "styled-components";
import LogoWithText from "./LogoWIthText";
import Menubar from "./Menubar";

const Navbar = () => {

    return (
        <Nav>
            <LogoWithText />
            <Menubar/>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.div`
  padding: 1.5rem 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  color:#444444;
`;



