import React, { useState } from 'react';
import Styled from 'styled-components';

import LazyHero from 'react-lazy-hero';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Image from 'next/image';


import AboutUsMission from '../Components/AboutUsMission';
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
            <Jumbotron >
                   <H3 className="display-4">About Us</H3>
                <Jumbotron className="row">
                    <p className="lead col-md">{aboutMeParagraphOne} {aboutMeParagraphTwo} {aboutMeParagraphThree} {aboutMeParagraphFour}</p>

                    <img src="https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU" class="img-fluid col-md-5" alt="Responsive image"/>
                </Jumbotron>
                <AboutUsMission />

            </Jumbotron>


    );
}

const Jumbotron = Styled.section`
background: white;
padding: 3em;
box-shadow: 0 0 3em rgba(0,0,0,.15);
width: max(300px, 100%);



  p{
      //font-size: clamp(1rem, 1.25vw, 1.25rem);
  }
    
`

const H3 = Styled.h3`
    margin: 0 0 1.5rem;
    color: var(--clr-primary);
    line-height: .8;
    font-size: clamp(2rem, 5vw, 5rem);
`

const AboutImage = Styled.div`
padding: 0rem 0rem;

`