// add bootstrap css 
import NProgress from "nprogress";
import Router from 'next/router';

import 'nprogress/nprogress.css';

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import "../Components/styles/Navbar.css"

// Import from Stles inside Component
import '../Components/assets/css/animate.min.css';
import '../Components/assets/css/flaticon.css';
import '../Components/assets/css/boxicons.min.css';

import '../Components/assets/css/responsive.css';
//import '../Components/assets/css/responsive.css.map';
import '../Components/assets/css/responsive.scss';



import '../Components/assets/css/style.css';
//import '../Components/assets/css/style.css.map';
import '../Components/assets/css/style.scss';


//Import Page
import Page from '../Components/Page';


Router.events.on('routeChangeStart',()=>NProgress.start());
Router.events.on('routeChangeComplete',()=>NProgress.done());
Router.events.on('routeChangeError',()=>NProgress.done());

 function MyApp({ Component, pageProps }) {
  return(
  <Page>
    <Component {...pageProps} />
  </Page>
  )
}

export default MyApp;
