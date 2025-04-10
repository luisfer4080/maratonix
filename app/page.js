import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/main_page/Nav"
import Header from "./components/main_page/Header"
import Schools from "./components/main_page/Schools";
import Razones from "./components/main_page/Razones";
import About from "./components/main_page/About";
import Comments from "./components/main_page/Comments";
import Demo from "./components/main_page/Demo";
import Contact from "./components/main_page/Contact";
import Footer from "./components/main_page/Footer";

export default function Home() {
  return (    
    <>
      <Nav />
      <Header />
      <Schools />
      <Razones />
      <About />
      <Comments />
      <Demo />
      <Contact />
      <Footer />
    </>
  );
}
