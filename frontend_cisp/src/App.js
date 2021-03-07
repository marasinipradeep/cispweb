import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Styles
import './App.css';
import "./index.css"

//Importing from HomeComponents
import Navbars from "./Navbar/Navbars"


//Importing pages
import Home from "./Pages/HomePage/Home";

function App() {

  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <>
          {/* Navbars ALWAYS VISIBLE */}
          <Navbars />
          <Component {...props} />
        </>

      )}
      />
    )
  }
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
