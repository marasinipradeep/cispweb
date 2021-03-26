import React, { useState } from 'react';
import Styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Image from 'next/image';
//Import profile image

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 500,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export default function Aboutus() {

    //Setting state
    const [aboutMeParagraphOne, setAboutMeOne] = useState(
        `CISP - Bringing Excellence in Environmental Solutions, Human Friendly Cleaning Services, Greenhouse Farming and Tech Solution.`)

    const [aboutMeParagraphTwo, setAboutMeTwo] = useState(
        ` We are South Australian partner owned business. Working toward excellence in every venture we work on. We do not compromise in employee training and customer satisfaction.`)
    const [aboutMeParagraphThree, setAboutMeThree] = useState(
        `We are an Australian Registered Company working for all Australians.`)

    const [aboutMeParagraphFour, setAboutMeFour] = useState(
        ` We service our clients with utmost commitment and confidentiality. As a result, we are well reviewed and recommended by our clients.`)


    const classes = useStyles();
    return (

        <Grid container>

            <Grid item xs={12} sm={6} >
                <Jumbotron>
                    <Typography>{aboutMeParagraphOne}</Typography>
                    <Typography>{aboutMeParagraphTwo}</Typography>
                    <Typography>{aboutMeParagraphThree}</Typography>
                    <Typography>{aboutMeParagraphFour}</Typography>
                </Jumbotron>


            </Grid>

            <Grid item xs={12} sm={6}>
                <Jumbotron>
                    <Image
                        src="/about.jpeg"
                        alt="Picture of the author"
                        width={500}
                        height={400}
                    />
                </Jumbotron>
            </Grid>



        </Grid>

    );
}

const Jumbotron = Styled.div`
padding: 5rem 10rem;
font-size:15px;
  margin-bottom: 2rem;
  background-color: #FFFFFF;

  

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    margin:0px;
  }
`