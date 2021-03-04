import styled from 'styled-components';
import deafaultImage from '../../Images/homePic.jpg';


const StyledHero = styled.header`
min-height: 50vh;
max-width: 50vh;
margin:10px;
border-radius: 50%;
background:url(${props => props.img ? props.img :
        deafaultImage}) center/
cover no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;


export default StyledHero;