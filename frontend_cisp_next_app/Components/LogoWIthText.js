import styled from "styled-components";
import Link from "next/link";
export default function Logowithtext(props) {


    return (
            <LogoTxtDiv>
                <Link href="/">
                    <Logo alt="Logo" src={'/cisp.png'} />
                </Link>
                <Link href="/">
                    <LogoText>CREATIVE INFORMATIVE <br />SUPPORTIVE PARTNERS</LogoText>
                </Link>
            </LogoTxtDiv>
    )
}

const LogoTxtDiv = styled.div`
display: flex;
align-items: center;
`;
const Logo = styled.img`
  color: #0D7041;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  width:17%;
  cursor:pointer;
  
`;

const LogoText = styled.a`
  color: #0D7041;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  cursor:pointer
`;
