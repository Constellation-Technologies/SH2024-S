import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Countdown from "./components/Countdown";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Landing />
        <Parallax translateY={[-12, -40]}>
          <About />
        </Parallax>
        <Parallax translateY={[-10, -25]}>
          <Countdown />
        </Parallax>
      </ParallaxProvider>
    </>
  );
}

export default App;
