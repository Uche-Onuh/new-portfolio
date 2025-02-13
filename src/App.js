import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

import {
  Navbar,
  Footer,
  Hero,
  Services,
  Portfolio,
  Contact,
} from "./components";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
