import { Footer } from "../footer/Footer";
import Header from "../header/Header";

export default function Layout({ children }) {
    return (
      <>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </>
    )
  }