import { Link } from "react-router-dom";

export default function Bottomfooter(props) {


    return (
        <div className="container-fluid">
            <div className="row bg-dark mt-1">
                <div className="col-md-6">
                    <p className="text-light">Copyright © 2021 <a href="https://cisp.com.au/" className="text-info">CISP PTY</a> Limited All Rights Reserved.</p>
                </div>
                <div className="col-md-6">
                    <p className="text-light">Powered By:<Link to="/" className="text-info">CISP TECH PTY LTD</Link></p>
                </div>
            </div>
        </div>
    )
}
