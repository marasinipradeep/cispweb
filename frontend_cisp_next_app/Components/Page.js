import PropTypes from 'prop-types';
import Header from './Header';
import Nav from './Nav';

export default function Page({ children }) {
    return (
        <>
            <Header />
            <Nav />
            <h1>I am the Page Component</h1>
            {children}
        </>
    )
}

Page.prototype = {
    children: PropTypes.any,
};
