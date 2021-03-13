import React from "react";
import { Link } from 'react-router-dom';

//import from pureComponents
import Hero from '../../PureComponents/Hero/Hero';
import Banner from '../../PureComponents/Banner/Banner';
import AboutUS from '../../AboutUs/AboutUs';
import Services from '../../Services/Services';
import ContactUs from '../../ContactUs/ContactUs';



export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Creative Innovative Supportive Partners" subtitle="CISP">
                    <Link to="/" className="btn-primary">
                        <span className="blinking">Get Quote</span>
                    </Link>
                </Banner>
            </Hero>
            <AboutUS />
            <Services />
            <ContactUs />
        </>
    )
}