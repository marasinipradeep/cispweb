import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import Styled from 'styled-components';
import Image from 'next/image';

export default function Chooseus(props) {

    return (
        <>
            <Heading> WHY CHOOSE US </Heading>
            <Paragraph>We carry the beacon of inclusiveness, hard work and empowerment.</Paragraph>

            <Cards className="row">
            <div className="col-sm-12 col-md-1 "></div>

                <div className="col-sm-12 col-md-2 card">
                    <LayersOutlinedIcon />
                    <div class="card-body">
                        <h5 class="card-title">EXPERT EMPLOYEE</h5>
                        <p class="card-text">Our employees are well trained, proactive and experienced.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-1 "></div>

                <div className="col-sm-12 col-md-2 card ">
                    <LayersOutlinedIcon />
                    <div class="card-body">
                        <h5 class="card-title">SECURE SERVICES</h5>
                        <p class="card-text">Our employees go through rigorous screening. Only employed when they meet company standards and understand companies’ aspirations.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-1 "></div>

                <div className="col-sm-12 col-md-2 card">
                    <LayersOutlinedIcon />
                    <div class="card-body">
                        <h5 class="card-title">LOW COSTING</h5>
                        <p class="card-text">We are highly recommended because we deliver quality project with comparatively cheaper rates.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-1 "></div>

                <div className="col-sm-12 col-md-2 card">
                    <LayersOutlinedIcon />
                    <div class="card-body">
                        <h5 class="card-title">ON TIME FINISHED</h5>
                        <p class="card-text">Our leadership, team spirit and time management skills work in cohesion to achieve on time finish with quality service.</p>
                    </div>
                </div>
            </Cards>

            </>
    )
}

const Heading = Styled.h2`
margin: 0 0 1.5rem;
color: var(--clr-primary);
line-height: .8;
padding-top:4rem;
padding-bottom:0.2rem;
display:flex;
justify-content:center;
font-size: clamp(2rem, 5vw, 5rem);
`

const Paragraph = Styled.p`
display:flex;
justify-content:center;

`

const Cards = Styled.div`
padding:4rem 10rem;
@media (max-width: 768px) {
    padding:0rem 0rem;

}

`
