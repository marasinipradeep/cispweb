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
  padding: 0 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 10;
  left: 0;
  right: 0;
`;



