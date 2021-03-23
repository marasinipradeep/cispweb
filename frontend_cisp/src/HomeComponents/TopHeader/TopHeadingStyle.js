import styled from "styled-components";


const TopHeading = styled.header`
margin-top:1px;
border-bottom: 0px solid #222;
padding: 0px 50px 0px 120px;
height: 50px;
background: #FAFAFA;

div {
    float: left;
    padding: 10px 0px; 
  }
  
  .float-left {
    font-family:Open Sans, sans-serif;
    font-size:15px;
   color:#888888;
    
    margin:0px 20px 0px 0px;
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
    font-size:1em;
  }

  button a{
    text-decoration:none;
    color:white;
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