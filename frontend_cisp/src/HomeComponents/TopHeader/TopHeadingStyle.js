import styled from "styled-components";

const TopHeading = styled.header`

margin-top:1px;
border-bottom: 0px solid #222;
padding: 0px 50px 0px 120px;
height: 50px;
background: #ebf6f5;
font-size: 0.8em;
color:green;

div {
    float: left;
    padding: 15px; 
  }
  
  .float-left {
  }
  
  .float-right {
    float:right;
    padding: 0px 300px 0px 0px;
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

  @media only screen and (max-width: 1024px) {
    padding: 0px 50px 0px 200px;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px 0px 0px 30px;
    button{
      margin-left:10px;
      padding:5px;
      background:green;
      font-size:0.8em;
    }
   ;
  }

  @media only screen and (max-width: 640px) {
    display:none;
  }


  }
`;

export default TopHeading;