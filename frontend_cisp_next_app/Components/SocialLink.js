import Styled from "styled-components";
import { LinkedIn, Facebook, Twitter } from '@material-ui/icons';
export default function Sociallink(props) {


    return (
            <SocialLinks>
                <Link  href="https://www.facebook.com/cisp.com.au" target="_blank">
                    <Facebook style={{ fontSize: 20 }}/>
                </Link>

                <Link href="https://www.linkedin.com/in/anugra-kc-1198291aa/" target="_blank">
                    <LinkedIn style={{ fontSize: 20 }}/>
                </Link>

                <Link  href="https://www.linkedin.com/in/anugra-kc-1198291aa/" target="_blank">
                    <Twitter style={{ fontSize: 20 }}/>
                </Link>
            </SocialLinks>
    )
}

// const Link = Styled.a`
// border: 0.1rem groove black;
// margin:0.1rem;
// font-size: clamp(1rem, 1vw, 1rem);
// color:green;
// `
const SocialLinks = Styled.div`

@media (max-width: 768px) {
  //  display:none
    }
`;

const Link =Styled.a`

border: 1px groove black;
margin:2px;
//font-size:25px;
color:green;
`

