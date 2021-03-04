import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Styles
import './App.css';
import "./style.css"

//Importing from HomeComponents
import Header from "./HomeComponents/Header/Header";


//Importing pages
import Home from "./Pages/HomePage/Home";

function App() {

  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <>
         <Header /> {/* HEADER ALWAYS VISIBLE */}
        <Component {...props} />
        </>

      )}
      />
    )
  }
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home}  />
      </Switch>

    </Router>
  );
}

export default App;
