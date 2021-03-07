import React from "react";
import { Link } from 'react-router-dom';

//import from pureComponents
import Hero from '../../PureComponents/Hero/Hero';
import Banner from '../../PureComponents/Banner/Banner';


export default function Home() {
    return (
        <div className= "container" >
            <div className="row" >
                <Hero className="col-sm-12">
                    <Banner title="Creative Innovative Supportive Partners" subtitle="CISP">
                        <Link to="/" className="btn-primary">
                            <span className="blinking">Get Quote</span>
                        </Link>
                    </Banner>
                 
                </Hero>
            </div>
        </div>
    )
}