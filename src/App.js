import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return <h1 className="text-primary">Hello world</h1>;
}

export default App;
