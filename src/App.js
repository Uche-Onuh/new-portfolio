import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

import { Navbar, Footer, Hero } from "./components";

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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
