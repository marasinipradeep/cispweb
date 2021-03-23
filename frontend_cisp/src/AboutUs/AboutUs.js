import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';
//Import profile image
import aboutImage from "../Images/about.jpeg"
import "./AboutUs.css";

export default function AboutMe() {

    //Setting state
    const [aboutMeParagraphOne, setAboutMeOne] = useState(
        `CISP - Bringing Excellence in Environmental Solutions, Human Friendly Cleaning Services, Greenhouse Farming and Tech Solution.`)

    const [aboutMeParagraphTwo, setAboutMeTwo] = useState(
        ` WWe are South Australian partner owned business. Working toward excellence in every venture we work on. We do not compromise in employee training and customer satisfaction.`)
    const [aboutMeParagraphThree, setAboutMeThree] = useState(
        `We are an Australian Registered Company working for all Australians.`)

    const [aboutMeParagraphFour, setAboutMeFour] = useState(
        ` We service our clients with utmost commitment and confidentiality. As a result, we are well reviewed and recommended by our clients.`)

    return (
        <div className='container-fluid  about'>
            <div className="row">
                <div className="col-xs-12 col-md-6 about-content">
                    <h1>About.</h1>
                    <p>{aboutMeParagraphOne}</p>
                    <p>{aboutMeParagraphTwo}</p>
                    <p>{aboutMeParagraphThree}</p>
                    <p>{aboutMeParagraphFour}</p>
                </div>
                <img src={aboutImage} alt='about imge' className="col-xs-12  col-md-6"/>
            </div>
        </div>
    );
}