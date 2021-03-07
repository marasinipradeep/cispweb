
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { LinkedIn, Copyright, Phone, Email, Face, Facebook, Place } from '@material-ui/icons';

import TopHeading from './TopHeadingStyle';


//import styles from HeaserStyle
export default function Topheading(props) {

  return (
    <>

      <TopHeading>
        {/* <div className="float-left">
          <Place /> 222 Kesters Road Para Hills SA 5096 <Email /> admin@cisp.com
        <Phone /> +0416080519
        </div>


        <div className="float-right">
          <a target="https://www.facebook.com/cisp.com.au">
            <Facebook />
          </a>
        </div> */}

        <div class="float-left"> <Place /> 222 Kesters Road Para Hills SA 5096 <Email /> admin@cisp.com
        <Phone /> +0416080519</div>
        <div class="float-right">
          <a target="https://www.facebook.com/cisp.com.au">
            <Facebook />
          </a>
          <a target="https://www.linkedin.com/in/anugra-kc-1198291aa/">
            <LinkedIn />
          </a>
          <button>GET A QUOTE</button>
        </div>
      </TopHeading>
    </>
  );
}
