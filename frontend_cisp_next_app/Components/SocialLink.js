import Styled from "styled-components";
import { LinkedIn, Facebook,Twitter } from '@material-ui/icons';
export default function Sociallink(props) {


    return (
        <SocialLinks  >
            <Link href="https://www.facebook.com/cisp.com.au" target="_blank">
                <Facebook />
            </Link>
            <Link href="https://www.linkedin.com/in/anugra-kc-1198291aa/" target="_blank">
                <LinkedIn />
            </Link>

            <Link href="https://www.linkedin.com/in/anugra-kc-1198291aa/" target="_blank">
                <Twitter />
            </Link>
        </SocialLinks>
    )
}

const SocialLinks = Styled.div`

@media (max-width: 768px) {
    display:none
    }
`;

const Link =Styled.a`

border: 1px groove black;
margin:2px;
font-size:25px;
color:green;
`


