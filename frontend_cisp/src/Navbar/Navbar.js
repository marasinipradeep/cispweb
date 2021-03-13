import React, { Component } from 'react';
import logo from '../Images/cisp.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

import TopHeading from "../HomeComponents/TopHeader/TopHeading";
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false

        }
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <>
                <TopHeading />
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/">
                                <img alt="Logo" src={process.env.PUBLIC_URL + '/cisp.png'} className="logo" />
                             <h5><br/>CREATIVE INFORMATIVE <br/>SUPPORTIVE PARTNERS</h5> 
                            </Link>
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                <FaAlignRight className="nav-icon" />

                            </button>
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>

                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About us</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/carrier">Career</Link>
                            </li>
                            <li>
                                <Link to="/">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact us</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar