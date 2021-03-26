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

  @media screen and (max-width: 1600px) and (min-width: 1300px) {
    width:30%;
  }
  
  @media screen and (max-width: 1300px) and (min-width: 900px) {
    width:25%;
  }
  
  @media screen and (max-width: 900px) and (min-width: 780px) {
    
    width:25%;
  }

  @media screen and (max-width: 780px) and (min-width: 312px) {
    width:25%;
  }
  @media (max-width: 312px) {
    width:30%;
  }

 
  
`;

const LogoText = styled.a`
  color: #0D7041;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  cursor:pointer
  @media screen and (max-width: 1600px) and (min-width: 1300px) {
    font-size:18px;
  }

  @media screen and (max-width: 1300px) and (min-width: 1100px) {
    font-size:18px;
  }
  
  @media screen and (max-width: 1100px) and (min-width: 900px) {
    font-size:12px;
  }
  
  @media screen and (max-width: 900px) and (min-width: 780px) {
    font-size:12px;
  }

  @media screen and (max-width: 780px) and (min-width: 312px) {
    font-size:14px;
  }
  @media (max-width: 312px) {
    font-size:10px;
  }

  
`;
