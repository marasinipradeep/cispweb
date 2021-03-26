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

  @media screen and (max-width: 1600px) and (min-width: 1300px) {
    padding: 0rem 10rem;
}

@media screen and (max-width: 1300px) and (min-width: 900px) {
    padding: 0rem 5rem;
 }

 @media screen and (max-width: 900px) and (min-width: 780px) {
    padding: 0rem 0rem;
}
@media screen and (max-width: 780px) and (min-width: 312px) {
    display:block;
    align-items: center;
    padding:0px 50px
  }

  @media (max-width: 312px) {
    display:block;
    align-items: center;
    padding:0px 30px
  }

  
}
`;



