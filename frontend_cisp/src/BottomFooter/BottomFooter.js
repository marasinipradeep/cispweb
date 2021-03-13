import { Link } from "react-router-dom";

export default function Bottomfooter(props) {


    return (
        <div className="container-fluid">
            <div className="row bg-secondary">
                <div className="col-md-6">
                    <p>Copyright © 2021 CISP PTY Limited All Rights Reserved.</p>
                </div>
                <div className="col-md-6">
                    <p>Powered By:<Link to="/">CISP TECH PTY LTD</Link></p>
                </div>
            </div>
        </div>
    )
}
