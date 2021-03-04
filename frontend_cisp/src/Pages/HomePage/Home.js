import React from "react";
import { Link } from 'react-router-dom';

//import from pureComponents
import Hero from '../../PureComponents/Hero/Hero';
import Banner from '../../PureComponents/Banner/Banner';

//import from HomeComponents

//import from material ui
import { Grid } from "@material-ui/core"



export default function Home() {
    return (
        <Grid container >
            <Grid item sm={12} >
                <Hero>
                    <Banner title="CISP" subtitle="Creative Innovative Supportive Partners">
                        <Link to="/" className="btn-primary">
                            <span className="blinking">Get Quote</span>
                        </Link>
                    </Banner>
                 
                </Hero>
            </Grid>
        </Grid>
    )
}