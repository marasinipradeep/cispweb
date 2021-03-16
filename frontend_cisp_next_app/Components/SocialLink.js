import { LinkedIn, Copyright, Phone, Email, Face, Facebook, Place } from '@material-ui/icons';
export default function Sociallink(props) {


    return (
        <div className="container-fluid" >
                <a href="https://www.facebook.com/cisp.com.au" target="_blank">
                    <Facebook />
                </a>
                <a href="https://www.linkedin.com/in/anugra-kc-1198291aa/" target="_blank">
                    <LinkedIn />
                </a>
                    <button>GET QUOTE</button>
        </div>
    )
}
