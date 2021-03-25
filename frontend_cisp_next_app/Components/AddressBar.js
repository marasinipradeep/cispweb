import styled from "styled-components";
import { Phone, Email, Place } from '@material-ui/icons';
export default function Addressbar(props) {


    return (
        <Address>
            <Place /> 222 Kesters Road Para Hills SA 5096
            <Email className="ml-3" /> admin@cisp.com
            <Phone className="ml-3" /> +0416080519
        </Address>
    )
}

const Address = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
