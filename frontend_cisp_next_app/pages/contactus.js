import React from 'react';
import Styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import SocialLinks from '../Components/SocialLink';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function Contactus(props) {
    const classes = useStyles();

    return (
        <Contact className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6 jumbotron ">
                    <h1 >Find Us</h1>
                    <p>We are a service-based company. We pride in teamwork, dedication and meeting targets. If you require any assistant, you can contact us through different social media platforms and also fill the form below for quick response.</p>

                    <h2>Our Social Media Links: <SocialLinks /></h2>
                </div>

                <div className="col-sm-12 col-md-6 jumbotron">


                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Your Name" />
                            </Grid>
                            <Grid item>
                                <Email />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Email" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">

                            <Grid item>
                                <TextField id="outlined-basic" label="Your Message" variant="outlined" />
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems="flex-end">

                            <Grid item>
                                <Button variant="contained" color="primary" component="span">


                                    Submit
        </Button>
                            </Grid>
                        </Grid>
                    </div>

                </div>
            </div>
        </Contact>
    )
}


const Contact = Styled.div`
padding: 250px 100px;
color:#000000;
background: #FFFFFF;

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



