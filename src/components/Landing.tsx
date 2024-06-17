import "../styles/Landing.css";
import planets from "/planets.png";
import hack2024s from "/Hack2024S.png";
import "animate.css";

function Landing() {
  return (
    <>
      <div className="container w-screen h-screen">
        <img
          src={planets}
          alt="Planets"
          className="top-image animate__animated animate__fadeInDown"
        />
        <img
          src={hack2024s}
          alt="Hack2024S"
          className="center-image animate__animated animate__rollIn"
        />
      </div>
    </>
  );
}

export default Landing;
