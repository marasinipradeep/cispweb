import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa'
import Link from "next/link";

class Nav extends Component {
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
            <div className="container-fluid">
                <nav className="navbar row">
                    <div className="nav-center">
                        <div className="nav-header col-6">
                            <div className="row">
                                <Link href="/" className="col-6">
                                    <a>
                                        <img alt="Logo" src={'/cisp.png'} className="logo" />
                                        <h5><br />CREATIVE INFORMATIVE <br />SUPPORTIVE PARTNERS</h5>
                                    </a>
                                </Link>
                            </div>
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                <FaAlignRight className="nav-icon" />
                            </button>
                        </div>
                        <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>

                            <Link href="/aboutus" className="nav-item"> About us</Link>
                            <Link href="/services"> Services</Link>
                            <Link href="/contactus">Contact us</Link>
                        </div>
                    </div>
                </nav>

            </div>


        );
    }
}

export default Nav