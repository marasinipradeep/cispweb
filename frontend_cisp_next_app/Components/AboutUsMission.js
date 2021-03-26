
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import Styled from 'styled-components';
export default function Aboutusmission(props) {


    return (
        <div className="container-fluid">
            <AboutUs className="row">
                <div className="col-sm-12 col-md-4" >
                    <h3><LayersOutlinedIcon style={{ fontSize: 80 }} />
                    OUR <span>MISSION</span></h3>
                    <p>Incorporate environment in every part of Life.</p>
                </div>

                <div className="col-sm-12 col-md-4" >
                    <h3><FavoriteBorderIcon style={{ fontSize: 80 }} />
                    OUR <span>VISION</span></h3>
                    <p>Arrays of services and products, which will be human focused with environment in its hearts.</p>
                </div>

                <div className="col-sm-12 col-md-4" >
                    <h3> <ImportantDevicesIcon style={{ fontSize: 80 }} />
                    OUR <span>EXPERIENCE</span></h3>
                    <p>We service our clients with utmost commitment and confidentiality. As a result, we are well reviewed and recommended by our clients.</p>
                </div>
            </AboutUs>
        </div>
    )
}


const AboutUs = Styled.div`
padding:10px 100px;
color: #555555;

h3{
    color: #63C762;

    span{

        color: blue;
    
    }
}

p{
    margin:0px 500px
    @media (max-width: 768px) {
        padding: 0rem 0rem;
      }
}

@media (max-width: 768px) {
    padding: 0rem 0rem;
  }

`
