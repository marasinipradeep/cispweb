import SocialLinks from '../PureComponents/SocialLinks/SocialLink';
export default function Contactus(props) {


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6 jumbotron ">
                    <h1 >Find Us</h1>
                    <p>We are a service-based company. We pride in teamwork, dedication and meeting targets. If you require any assistant, you can contact us through different social media platforms and also fill the form below for quick response.</p>

                    <h2>Our Social Media Links: <SocialLinks /></h2>
                </div>

                <div className="col-sm-12 col-md-6 jumbotron">
                    <input placeholder="Name"  className="m-4"/>
                    <input placeholder="Email" className="m-4" /><br/>
                    <input placeholder="Subject" className="m-4" /><br/>
                    <textarea placeholder="Please Enter Your Message" className="m-4"></textarea>
                    <button className="m-4">Submit</button>

                </div>


            </div>

        </div>
    )
}
