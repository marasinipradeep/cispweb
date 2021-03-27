// add bootstrap css 
import NProgress from "nprogress";
import Router from 'next/router';

import 'nprogress/nprogress.css';

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import "../Components/styles/Navbar.css"
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
