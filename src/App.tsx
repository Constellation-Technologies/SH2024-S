import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Landing />
        <Parallax translateY={[20, -100]}>
          <About />
        </Parallax>
      </ParallaxProvider>
    </>
  );
}

export default App;
