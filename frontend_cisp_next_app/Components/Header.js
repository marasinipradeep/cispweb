import styled from "styled-components";
import AddressBar from "./AddressBar";
import Sociallink from "./SocialLink";
import Button from "./Button";


//import styles from HeaserStyle
export default function Header(props) {
    return (
        <TopHeader>
            <AddressBar />
            <Sociallink />
            <Button> Get Quote</Button>
        </TopHeader>
    );
}

const TopHeader = styled.div`
padding: 0rem 20rem;
display: flex;
justify-content: space-between;
background: #FAFAFA;
  align-items: center;

  @media screen and (max-width: 1600px) and (min-width: 1300px) {
    padding: 0rem 10rem;
   font-size:14px;
}

@media screen and (max-width: 1300px) and (min-width: 900px) {
    padding: 0rem 5rem;
    font-size:13px;
 }


@media screen and (max-width: 900px) and (min-width: 780px) {
    padding: 0rem 0rem;
    font-size:12px;
}
  @media only screen and (max-width: 780px) {
      display:none
  }

`;