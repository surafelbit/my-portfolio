import logo from "./logo.svg";
import "./App.css";
import Upbar from "./Upbar/Upbar";
import Body from "./Body/Body";
import AboutMe from "./Body/AboutMe";
import MyServices from "./Body/MyServices";
import MySkills from "./Body/MySkills";
import ContactMe from "./Body/ContactMe";
import { useState, useEffect } from "react";
function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Show button when scrolled down
      } else {
        setShowButton(false); // Hide button when near top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Upbar></Upbar>
      <div id="home">
        <Body></Body>
      </div>
      <div id="about">
        <AboutMe onThing={scrollToTop}></AboutMe>
      </div>
      <div id="services">
        <MyServices></MyServices>
      </div>
      <div id="skills">
        <MySkills></MySkills>
      </div>
      <div id="contact">
        <ContactMe></ContactMe>
      </div>
      {showButton && (
        <button className="upButton" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
