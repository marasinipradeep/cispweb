
import React, { useState } from "react";
import { LinkedIn, Copyright, Phone, Email, Face, Facebook, Place } from '@material-ui/icons';
import SocialLink from "../../PureComponents/SocialLinks/SocialLink";

import TopHeading from './TopHeadingStyle';


//import styles from HeaserStyle
export default function Topheading(props) {

  return (
    <>

      <TopHeading>
        <div class="float-left"> <Place /> 222 Kesters Road Para Hills SA 5096 <Email /> admin@cisp.com
        <Phone /> +0416080519</div>
        <div class="float-right">
          <SocialLink />
          <button>GET A QUOTE</button>
        </div>

      </TopHeading>
    </>
  );
}
