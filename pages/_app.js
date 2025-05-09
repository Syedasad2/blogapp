import "@/styles/globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>;
  <Component {...pageProps} />;
  <Footer/>
  </>
}
