import LazyHero from 'react-lazy-hero';
import Styled from "styled-components";
import Button from "./Button";
export default function Heroimage(props) {


    return (
       
            <LazyHero imageSrc="https://unsplash.it/2000/1000" isFixed={true} color="#010101" minHeight="60vh">
                
                <HeroHeading>We provide consultation and manage from start to end.</HeroHeading>
                <br />
                <br />
                <br />
                <HeroButton>
                    <Button>OUR SERVICES</Button>
                    <Button>GET A QUOTE</Button>
                    </HeroButton>
            </LazyHero>
            
    )
}

const HeroHeading = Styled.h1`
color: #FFFFFF;
text-transform: uppercase;
`;

const HeroButton = Styled.div`
display:flex;
`;
