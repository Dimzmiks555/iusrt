import { Footer } from "../footer/Footer";
import LKHeader from "../header/LKHeader";

export default function LKLayout({ children }) {
    return (
      <>
      
        <LKHeader />
        <main>{children}</main>
        <Footer></Footer>
      </>
    )
  }