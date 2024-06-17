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
        <Parallax translateY={[20, -100]}>
          <About />
        </Parallax>
        <Parallax translateY={[20, -20]}>
          <Countdown />
        </Parallax>
      </ParallaxProvider>
    </>
  );
}

export default App;
