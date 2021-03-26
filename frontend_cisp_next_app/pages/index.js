import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Page from '../Components/Header';
import AboutUS from "../pages/aboutus";
import Services from "../pages/services";

export default function Home() {
  return (
    <>
      <AboutUS />
      <Services />
    </>
  )
}
