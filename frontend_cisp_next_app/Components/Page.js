import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from './Header';
import NewNav from './NewNav';
import Footer from './Footer';
import Bottomfooter from './BottomFooter';

export default function Page({ children }) {
    return (
        <>
            <Header />
            <NewNav />
            {children}
            <Footer />
            <Bottomfooter />
        </>
    )
}

Page.prototype = {
    children: PropTypes.any,
};
