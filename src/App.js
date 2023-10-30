import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

import { Navbar, Footer } from "./components";

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
          
        </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
