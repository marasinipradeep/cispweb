import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from './Header';
import Nav from './Nav';
import NewNav from './NewNav';

export default function Page({ children }) {
    return (
        <>
        <Container>
            <Header />
            <NewNav/>
            {/* <Nav /> */}
            <h1>I am the Page Component</h1>
            {children}
            </Container>
        </>
    )
}

Page.prototype = {
    children: PropTypes.any,
};
const Container = styled.div`
  background: #67bc98;
  height: 100vh;
`;
