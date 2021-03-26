//import { Link } from "react-router-dom";
import Link from "next/link";
import Styled from 'styled-components';

export default function Bottomfooter(props) {

    return (
        <BtmFooter className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <p >Copyright © 2021 <a href="https://cisp.com.au/" className="text-info">CISP PTY</a> Limited All Rights Reserved.</p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p >Powered By:<Link href="/" className="text-info">CISP TECH PTY LTD</Link></p>
                </div>
            </div>
        </BtmFooter>
    )
}

const BtmFooter = Styled.div`
padding: 10px 300px;
color:#DDDDDD;
background: #111111;

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

`
