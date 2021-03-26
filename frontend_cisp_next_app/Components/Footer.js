import Styled from 'styled-components';
export default function Footer(props) {


    return (
        <BtmFooter className="container-fluid ">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className="text-light">
                        <Logo alt="Logo" src={'/cisp.png'} />
                        <p>We are South Australian family owned business. Working toward excellence in every venture we work on. We do not compromise in employee training and customer satisfaction.</p><br />

                        <p>Tel: +041 608 0519</p>
                        <p>Email: admin@cisp.com.au</p>
                        <p>Location: 222 Kesters Road Para Hills SA 5096</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="text-light">
                        <h1>SERVICES LINK</h1><br />

                        <a href="#" className="text-light">>CISP CLENING</a><br />
                        <a href="#" className="text-light">>CISP FARMING</a><br />
                        <a href="#" className="text-light">>CISP TECH</a><br />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="text-light">
                        <h1>GET AN APPOINTMENT</h1><br />
                        <p>Our consultations are clients focused and always have best interest of our clients. We help you meet your target and achieve your dreams.</p><br/>
                        <button className="btn-primary">MAKE APPOINTMENT</button>
                    </div>
                </div>
            </div>
        </BtmFooter>
    )
}

const BtmFooter = Styled.div`
padding: 20px 300px;
color:#DDDDDD;
background: #1F1F1F;

@media screen and (max-width: 1600px) and (min-width: 1300px) {
    padding: 0rem 10rem;
}

@media screen and (max-width: 1300px) and (min-width: 900px) {
    padding: 0rem 5rem;
 }

 @media screen and (max-width: 900px) and (min-width: 780px) {
    padding: 0rem 0rem;
}
@media screen and (max-width: 780px) and (min-width: 312px) {
    display:block;
    align-items: center;
    padding:0px 50px
  }

  @media (max-width: 312px) {
    display:block;
    align-items: center;
    padding:0px 30px
  }

`


const Logo = Styled.img`
  color: #0D7041;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  width:17%;
  cursor:pointer;

  @media screen and (max-width: 1600px) and (min-width: 1300px) {
    width:30%;
  }
  
  @media screen and (max-width: 1300px) and (min-width: 900px) {
    width:25%;
  }
  
  @media screen and (max-width: 900px) and (min-width: 780px) {
    
    width:25%;
  }

  @media screen and (max-width: 780px) and (min-width: 312px) {
    width:25%;
  }
  @media (max-width: 312px) {
    width:30%;
  }
`;
