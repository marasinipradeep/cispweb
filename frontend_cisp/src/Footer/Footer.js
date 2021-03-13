export default function Footer(props) {


    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className="text-light">
                        <p>We are South Australian family owned business. Working toward excellence in every venture we work on. We do not compromise in employee training and customer satisfaction.</p><br />

                        <p>Tel: +041 608 0519</p>
                        <p>Email: admin@cisp.com.au</p>
                        <p>Location: 222 Kesters Road Para Hills SA 5096</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="text-light">
                        <h1>SERVICES LINK</h1><br />

                        <a href="#" className="text-light">>CISP CLENING</a><br />
                        <a href="#" className="text-light">>CISP FARMING</a><br />
                        <a href="#" className="text-light">>CISP TECH</a><br />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="text-light">
                        <h1>GET AN APPOINTMENT</h1><br />
                        <p>Our consultations are clients focused and always have best interest of our clients. We help you meet your target and achieve your dreams.</p><br/>
                        <button className="btn-primary">MAKE APPOINTMENT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
