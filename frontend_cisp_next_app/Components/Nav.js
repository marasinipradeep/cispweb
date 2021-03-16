import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';


export default function Nav(props) {
    const [state, setState] = useState(false);


    return (
        <nav className="container">
            <div className="row">

                {/* anything you want to link inside your website use Link anything you want to link outside of the web use anchor link  */}
                <Link href="/" className="row" >
                    <div >
                        <Image alt="Logo" src="/cisp.png"
                            width="64" height="64" className="logo" />
                        <h5><br />CREATIVE INFORMATIVE <br />SUPPORTIVE PARTNERS</h5>
                    </div>
                </Link>
                <Link href="/aboutus"> About us</Link>
                <Link href="/services"> Services</Link>
                <Link href="/contactus">Contact us</Link>
            </div>
        </nav>
    )
}
