import styled from "styled-components";
export default function Button(props) {


    return (
        <Buttons>{props.children}</Buttons>
    )
}

const Buttons = styled.button`
  color:#FFFFFF ;
  border: 2px solid red;
  background: #63C672;
  font-size: 1em;
  margin:0px;
  padding:10px 20px;

  
`;
