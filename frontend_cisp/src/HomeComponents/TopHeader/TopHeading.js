import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { LinkedIn,Copyright, Phone, Email, Face,Facebook,Place } from '@material-ui/icons';


//import styles from HeaserStyle
import useStyles from "./TopHeadingStyle"
import { Grid,container } from '@material-ui/core';

function Footer() {
  //Import Hook to use styles
  const classes = useStyles()
  //Setting initial state
  // const [value, setValue] = React.useState(0);

  return (
    <>
    
        <BottomNavigation
          showLabels
          className={classes.root}
        >
        
            <BottomNavigationAction icon={<Place />} label="222 Kesters Road Para Hills SA 5096" edge="start" className={classes.socialLink} color="inherit" aria-label="address" />
            
          {/* email address */}
          <BottomNavigationAction icon={<Email />} label="admin@cisp.com" edge="start" className={classes.socialLink} color="inherit" aria-label="email" />

          {/* phone number */}
          <BottomNavigationAction edge="start" label="+0416080519" className={classes.socialLink} color="inherit" aria-label="phone-number" icon={<Phone />} />

          {/* portfolio */}
          <BottomNavigationAction edge="start" label="Facebook" className={classes.socialLink} color="inherit" aria-label="portfolio" icon={<Facebook />} onClick={() => window.open("https://www.facebook.com/cisp.com.au", '_blank')} />


          {/* linkdin */}
          <BottomNavigationAction className={classes.socialLink} label="LinkedIn" aria-label="linkedin" icon={<LinkedIn />} onClick={() => window.open("https://www.linkedin.com/in/anugra-kc-1198291aa/", '_blank')} />
      </BottomNavigation>
    
    </>
  );
}


export default Footer;