
import { Card, Button } from 'react-bootstrap';

import SolarPic from "../Images/solar.jpg";
import CleaningPic from "../Images/cleaning.jpg"

import "./Services.css"
export default function Services(props) {




    return (
        <div className="container-fluid services">
            <h1> Our Services</h1>
            <div className="row">

                <Card style={{ width: '25rem' }} className="card col-md-4">
                    <Card.Img src={SolarPic} />
                    <Card.Body>
                        <Card.Title>Solar System</Card.Title>
                        <Card.Text>
                            Free energy that will dwarf your electricity bills and in few years’ time you will be earning money from your excess solar. The most abundant renewable energy that can be captured, stored and sold. When you have fulfilled all your household electricity need, you can send it to the grid via your inverter. This energy you sell to the grid will trickle in your bank account.
               </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="card col-md-4">
                    <Card.Img src={SolarPic} />
                    <Card.Body>
                        <Card.Title>Cleaning</Card.Title>
                        <Card.Text>
                            Free energy that will dwarf your electricity bills and in few years’ time you will be earning money from your excess solar. The most abundant renewable energy that can be captured, stored and sold. When you have fulfilled all your household electricity need, you can send it to the grid via your inverter. This energy you sell to the grid will trickle in your bank account.
               </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }} className="card col-md-4">
                    <Card.Img src={CleaningPic} />
                    <Card.Body>
                        <Card.Title>Cleaning</Card.Title>
                        <Card.Text>
                            Free energy that will dwarf your electricity bills and in few years’ time you will be earning money from your excess solar. The most abundant renewable energy that can be captured, stored and sold. When you have fulfilled all your household electricity need, you can send it to the grid via your inverter. This energy you sell to the grid will trickle in your bank account.
               </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>


            </div>
        </div>
    )
}
