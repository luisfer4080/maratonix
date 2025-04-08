import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/main_page/Nav"
import Header from "./components/main_page/Header"
import Schools from "./components/main_page/Schools";

export default function Home() {
  return (    
    <>
      <Nav />
      <Header />
      <Schools />
    </>
  );
}
