import LazyHero from 'react-lazy-hero';
import Styled from "styled-components";
import Button from "./Button";
export default function Heroimage(props) {
    

    return (
        <>
            <LazyHero imageSrc="https://unsplash.it/2000/1000">
                <h1> Creative Informative Supportive Partners</h1>
                <br/>
                <br/>
                <br/>
                <Button>Services</Button>
                <Button>Get Quote</Button>
            </LazyHero>
        </>
    )
}

const HeroImage = Styled.div`
`;
