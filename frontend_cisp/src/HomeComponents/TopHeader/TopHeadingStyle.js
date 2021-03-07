import styled from "styled-components";

const TopHeading = styled.header`

margin-top:20px;
border-bottom: 0px solid #222;
padding: 0px 50px 0px 200px;
height: 50px;
background: #ffffff;
font-size: 0.8em;
color:green;

div {
    float: left;
    padding: 15px; 
  }
  
  .float-left {
    background: white;
  }
  
 
  
  .float-right {
    float:right;
    background: white;
    padding: 15px 550px 0px 0px;
  }

  button{
    margin-left:20px;
    padding:20px;
    background:green;
    height:50px;
    color:white;
    border-radius:20px;
    font-size:1em;
  }

  @media only screen and (max-width: 640px) {
    display:none;
  }
  }
`;

export default TopHeading;