import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Styles
import './App.css';
import "./index.css"

//Importing from HomeComponents
import NewNavBars from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Bottomfooter from './BottomFooter/BottomFooter';


//Importing pages
import Home from "./Pages/HomePage/Home";
import AboutUs from "./AboutUs/AboutUs";
import Services from './Services/Services';
import ContactUs from './ContactUs/ContactUs';

function App() {

  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <>
          {/* Navbars and Footer ALWAYS VISIBLE */}
          <NewNavBars />
          <Component {...props} />
          <Footer/>
          <Bottomfooter/>
        </>

      )}
      />
    )
  }
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/about-us" component={AboutUs}/>
        <PublicRoute exact path="/services" component={Services}/>
        <PublicRoute exact path="/contact-us" component={ContactUs}/>
      </Switch>

    </Router>
  );
}

export default App;
