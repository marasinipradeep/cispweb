import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';
//Import profile image
import aboutImage from "../Images/about.jpeg"
import "./AboutUs.css";

export default function AboutMe() {

    //Setting state
    const [aboutMeParagraphOne, setAboutMeOne] = useState(
        `CISP - Bringing Excellence in Environmental Solutions, Human Friendly Cleaning Services and Building Sustainable Homes.`)

    const [aboutMeParagraphTwo, setAboutMeTwo] = useState(
        ` We are South Australian family owned business. Working toward excellence in every venture we work on. We do not compromise in employee training and customer satisfaction.`)
    const [aboutMeParagraphThree, setAboutMeThree] = useState(
        `Anugra our Managing Director and Kiran our Chief Operations Manager have worked together for years to give South Australia excellent service. Anugra has an environmental engineering background bringing environmentally friendly solutions to all our clients.`)

    const [aboutMeParagraphFour, setAboutMeFour] = useState(
        ` Additionally, Kiran having a managerial nursing background brings clinical expertise and staff training with evidence-based learning. She likewise continually updates our polices and strategy and a reckoned leader to implement them. They have together built up a profoundly committed and proactive team.`)

    return (
        <div className='container about'>
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