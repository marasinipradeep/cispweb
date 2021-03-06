
import React, { useState } from "react";
import { Phone, Email,Place } from '@material-ui/icons';
import SocialLink from "../../PureComponents/SocialLinks/SocialLink";
import { Link } from 'react-router-dom';
import TopHeading from './TopHeadingStyle';


//import styles from HeaserStyle
export default function Topheading(props) {

  return (
    <>

      <TopHeading>
        <div >
          <float-left>
            <Place /> 222 Kesters Road Para Hills SA 5096
          <Email className="ml-3"/> admin@cisp.com
          <Phone className="ml-3" /> +0416080519</float-left>
        </div>

        <div className="float-right">
          <SocialLink />
          <button primary>
          <Link to="/contact-us">GET A QUOTE</Link>
            
            </button>
        </div>
      </TopHeading>
    </>
  );
}
