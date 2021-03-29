import styled from "styled-components";
import { Phone, Email, Place } from '@material-ui/icons';
export default function Addressbar(props) {


    return (
        <div className="container-fluid">
            <Heading className="row">
                <Address className="col-md">
                    <Place style={{ fontSize: 30 }}/> 222 Kesters Road Para Hills SA 5096

            </Address>
                <Address className="col-md">
                    <Email style={{ fontSize: 30 }}/> admin@cisp.com
            </Address>

                <Address className="col-md">
                    <Phone/> +0416080519
            </Address>

            </Heading>
        </div>
    )
}

const Heading = styled.div`
  color: #666666;
  
  }
`;

const Address = styled.address`
//display:inline;
//margin:4px;
`
