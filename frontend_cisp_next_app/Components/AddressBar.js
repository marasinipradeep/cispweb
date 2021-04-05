import styled from "styled-components";
import { Phone, Email, Place } from '@material-ui/icons';
export default function Addressbar(props) {


    return (

      <Heading>
      <Address>
      <Place /> 222 Kesters Road Para Hills SA 5096
    
      </Address>
      <Address>
      <Email className="ml-3" /> admin@cisp.com
    
      </Address>
      <Address>
      <Phone className="ml-3" /> +0416080519
      </Address>
     
  </Heading>
    )
}

// const Heading = styled.div`
//   color: #666666;
//   padding: 0rem 2rem;
//   }
// `;
const Heading = styled.div`
display: flex;
  color: #666666;
`;

const Address = styled.address`
//display:inline;
margin:0.1em;
`