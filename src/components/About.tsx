import "../styles/About.css";
import beachTop from "/beach-top.png";
import beach from "/beach.png";
import "animate.css";

function About() {
  return (
    <>
      <div className="container">
        <img
          src={beach}
          alt="Beach"
          className="bottom-image animate__animated animate__fadeInUp"
        />
        <img
          src={beachTop}
          alt="Beach Top"
          className="beach-top-image animate__animated animate__fadeInUp"
        />
        <div className="container-about"></div>
      </div>
    </>
  );
}
export default About;
