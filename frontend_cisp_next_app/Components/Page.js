import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from './Header';
import Nav from './Nav';
import NewNav from './NewNav';
import HeroImage from './HeroImage';
import Footer from './Footer';
import BottomFooter from './BottomFooter';
import Bottomfooter from './BottomFooter';

export default function Page({ children }) {
    return (
        <>
            <Header />
            <NewNav />
            {children}
            <Footer/>
            <Bottomfooter/>
            </>
    )
}

Page.prototype = {
    children: PropTypes.any,
};
