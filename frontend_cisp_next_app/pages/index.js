import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Page from '../Components/Header';
import AboutUS from "../pages/aboutus";
import Services from "../pages/services";
import HeroImage from "../Components/HeroImage";
import ContactUs from "../pages/contactus";

export default function Home() {
  return (
    <>
      <HeroImage/>
      <AboutUS />
    
      <Services />
      <ContactUs/>
    </>
  )
}
