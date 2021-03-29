import Styled from "styled-components";
import { LinkedIn, Facebook, Twitter } from '@material-ui/icons';
export default function Sociallink(props) {


    return (
        <div className="container-fluid">
            <SocialLinks className="row"  >
                <Link className="col-md" href="https://www.facebook.com/cisp.com.au" target="_blank">
                    <Facebook style={{ fontSize: 30 }}/>
                </Link>
                <Link className="col-md" href="https://www.linkedin.com/in/anugra-kc-1198291aa/" target="_blank">
                    <LinkedIn style={{ fontSize: 30 }}/>
                </Link>

                <Link className="col-md" href="https://www.linkedin.com/in/anugra-kc-1198291aa/" target="_blank">
                    <Twitter style={{ fontSize: 30 }}/>
                </Link>
            </SocialLinks>
        </div>
    )
}

const SocialLinks = Styled.div`

@media (max-width: 768px) {
   // display:none
    }
`;

const Link = Styled.a`
border: 0.1rem groove black;
margin:0.1rem;
font-size: clamp(1rem, 1.25vw, 1.25rem);
color:green;
`


