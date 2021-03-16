
import { LinkedIn, Copyright, Phone, Email, Face, Facebook, Place } from '@material-ui/icons';
//Css in Js. Scoped Css. Can use javascript variables
import styled from "styled-components";
import Nav from './Nav';
import Sociallink from './SocialLink';

const TopHeader = styled.header`
background-color: #FAFAFA;

address{
    font-family: Open Sans,sans-serif;
    font-size:15px;
    float: left;
    padding:10px 0px; 
    color:#888888
}

.socialLink{
    float:right;
}

@media only screen and (max-width: 640px)
 {
    display:none;
  }

`


export default function Header() {


    return (
        <>
            <div className="container-fluid">
                <TopHeader className="row">
                    <div className="col-sm-12 col-md-6">
                        <address> 
                        <Place />222 Kesters Road Para Hills SA 5096  
                       <a href="mailto:admin@cisp.com" ><Email/> admin@cisp.com</a> 
                       <a href="tel:+0416080519"><Phone/> +0416080519</a> 
                      </address>
                    </div>

                    <div className="socialLink col-sm-12 col-md-6">
                        <Sociallink />
                    </div>
                </TopHeader>
            </div>

            <Nav />
        </>
    )
}
