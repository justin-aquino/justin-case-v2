import { useState } from "react";
import "./App.css";
import Footer from "./Components/layouts/Footer/Footer";
import NaviBar from "./Components/layouts/Navibar/Navibar";
import TechStack from "./Components/Pages/TechStack/TechStack";
import ProjectList from "./Components/Pages/Portfolio/ProjectList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NaviBar />
        <h1>test</h1>
        <div className="flex-with-center" id="tech-stack">
          <TechStack />
        </div>

        <div id="project">
          <ProjectList />
        </div>
        {/* 
        <Landing />
        <div className="flex-with-center" id="tech-stack">
          <TechStack />
        </div>
        <About />
        
         */}
        <Footer />
      </div>
    </>
  );
}

export default App;
