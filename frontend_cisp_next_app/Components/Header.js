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
`;