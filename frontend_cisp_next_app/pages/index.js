import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Page from '../Components/Header';
import AboutUS from "../pages/aboutus";
import Services from "../pages/services";
import HeroImage from "../Components/HeroImage";
import ContactUs from "../pages/contactus";
import ChooseUs from "../Components/ChooseUs";
import OurSolutions from "../Components/Index/OurSolutions";

export default function Home() {
  return (
    <>
      <HeroImage/>
      <AboutUS />
      {/* <ChooseUs/> */}
      <OurSolutions/>
      {/* <Services /> */}
      <ContactUs/>
    </>
  )
}
