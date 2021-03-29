import styled from "styled-components";
export default function Button(props) {


    return (
        <Buttons type="button" className="btn" role="button">{props.children}</Buttons>
    )
}

const Buttons = styled.button`
padding: 0.5rem 2rem;
margin-right:5px;
align-items: center;
position: relative;
text-transform: uppercase;
font-weight: 500;
font-size: 1em;
background: #63C672;
border: 0;
cursor: pointer;
color: #FFFFFF;
&:before {
  content: '';
  width: 2px;
  height: 100%;
  left: 0;
  position: absolute;
  transform: skew(-20deg);
  top: 0;
  bottom: 0;
}
&:after {
  height: 2px;
  background: red;
  content: '';
  width: 0;
  position: absolute;
  transform: translateX(-50%);
  transition: width 0.4s;
  transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
  left: 50%;
  margin-top: 2rem;
}
&:hover,
&:focus {
  outline: none;
  &:after {
    width: calc(100% - 60px);
  }
}
}
  
`;
