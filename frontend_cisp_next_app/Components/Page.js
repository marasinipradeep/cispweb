import PropTypes from 'prop-types';
import Header from './Header';
export default function Page({children}) {
    

    return (
        <>
        <Header/>
            <h1>I am the Page Component</h1>
            {children}
        </>
    )
}

Page.prototype={
    children:PropTypes.any,
};
