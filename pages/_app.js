import "@/styles/globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>;
  <Component {...pageProps} />;
  <Footer/>
  </>
}