import { useState } from "react";

import "./App.css";
import Footer from "./layouts/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>test</h1>
        {/* <NaviBar />
        <Landing />
        <div className="flex-with-center" id="tech-stack">
          <TechStack />
        </div>
        <About />
        <div id="project">
          <ProjectList projects={projects} />
        </div>
         */}
        <Footer />
      </div>
    </>
  );
}

export default App;
