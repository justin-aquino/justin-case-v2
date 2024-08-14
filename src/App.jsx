import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Footer from "./layouts/Footer/Footer";
import NaviBar from "./layouts/Navibar/Navibar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NaviBar />
        <h1>test</h1>
        {/* 
        <Landing />
        <div className="flex-with-center" id="tech-stack">
          <TechStack />
        </div>
        <About />
        <div id="project">
          <ProjectList projects={projects} />
        </div>
         */}
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
        <Footer />
      </div>
    </>
  );
}

export default App;
