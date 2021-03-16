// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Page from '../Components/Page';

function MyApp({ Component, pageProps }) {
  return(
  <Page>
    <Component {...pageProps} />
  </Page>
  )
}

export default MyApp
