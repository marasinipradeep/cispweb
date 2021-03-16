
import { Card, Button } from 'react-bootstrap';
import SolarPic from "../Images/solar.jpg";
import CleaningPic from "../Images/cleaning.png"
import FarmingPic from "../Images/farming.png";
import TechPic from "../Images/tech.png";

import "./Services.css"
export default function Services(props) {




    return (
        <div className="container-fluid services">
            <h1> Our Services</h1>
            <div className="row m-4">

                <Card className="col-sm-12 col-md-3 m-1">
                    <Card.Img src={CleaningPic} />
                    <Card.Body>
                        <Card.Title>CISP Cleaning </Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="primary">More Info Click Here</Button>
                    </Card.Body>
                </Card>

                <Card className="col-sm-12 col-md-3 m-2">
                    <Card.Img src={FarmingPic} />
                    <Card.Body>
                        <Card.Title>CISP Farming</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">More Info Click Here</Button>
                    </Card.Body>
                </Card>

                <Card className="col-sm-12 col-md-3 m-1">
                    <Card.Img src={TechPic} />
                    <Card.Body>
                        <Card.Title>CISP Tech</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="primary">More Info Click Here</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
