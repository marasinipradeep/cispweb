import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from './Header';
import Nav from './Nav';
import NewNav from './NewNav';
import HeroImage from './HeroImage';

export default function Page({ children }) {
    return (
        <>
            <Header />
            <NewNav />
            <HeroImage />
            {children}
        </>
    )
}

Page.prototype = {
    children: PropTypes.any,
};
