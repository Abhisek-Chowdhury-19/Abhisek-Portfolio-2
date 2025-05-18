import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimatedCursor
        className="md:hidden"
        // innerSize={20}
        outerSize={50}
        color="0, 200, 255"
        outerAlpha={0.2}
        // innerScale={0.7}
        outerScale={2}
        showSystemCursor={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".bi",
          {
            target: ".custom",
            options: {
              outerSize: 12,
              color: "0, 200, 255",
              outerAlpha: 0.3,

              outerScale: 5,
            },
          },
        ]}
      />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
