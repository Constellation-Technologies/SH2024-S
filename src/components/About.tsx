import "../styles/About.css";
import beachTop from "/beach-top.png";
import beach from "/beach.png";
import "animate.css";

function About() {
  return (
    <>
      <div className="w-screen translate-y-[10rem] mb-[-50rem]">
        <img
          src={beach}
          alt="Beach"
          className="w-screen h-[40vh] bottom-image animate__animated animate__fadeInUp"
        />
        <img
          src={beachTop}
          alt="Beach Top"
          className="w-screen beach-top-image animate__animated animate__fadeInUp"
        />
        <div className="container-about px-20 py-12 w-screen h-[140vh] translate-y-[20rem] bg-gradient-to-r from-[#4FACFE] to-[#00F2FE]">
          <div className="about-title text-black font-extrabold font-[Inter] col-span-4 flex justify-center text-center text-6xl my-8">STAR HACK ALLIANCE</div>
          <div className="grid-about h-[80vh] grid-cols-4 grid-rows-[2fr_1fr] gap-x-[1vw] gap-y-[5vh] hidden lg:grid">
            <div className="about-heading rounded-3xl text-black col-span-3 flex flex-col justify-center border-solid border-white border-8 px-8 gap-4 bg-[rgba(255,255,255,0.15)]">
              <h1 className="heading underline decoration-white decoration-solid text-white w-[100%] text-4xl font-bold">About Us</h1>
              <p className="w-full flex justify-center text-center text-white text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae autem accusantium voluptatem consequuntur incidunt, non corrupti aspernatur dolores neque voluptatibus eligendi distinctio, at laborum nihil! Magni minima officiis nam earum veritatis est maiores nihil atque numquam amet dicta quos quia enim rem magnam, consequatur unde.</p>
            </div>
            <div className="about-star rounded-3xl text-black flex justify-center items-center border-solid border-white border-8 bg-[rgba(255,255,255,0.15)]">
              <img src="blank-star.png" alt="Logo" className="scale-75" />
            </div>

            <div className="about-linkedin rounded-3xl text-black flex justify-center border-solid border-white border-8 py-12 bg-[rgba(255,255,255,0.15)]">
              <img src="linkedin.png" alt="LinkedIn" className="scale-50" />
            </div>
            <div className="about-discord rounded-3xl text-black flex justify-center border-solid border-white border-8 py-12 bg-[rgba(255,255,255,0.15)]">
              <img src="discord.png" alt="Discord" className="scale-50" />
            </div>
            <div className="about-youtube rounded-3xl text-black flex justify-center border-solid border-white border-8 py-12 bg-[rgba(255,255,255,0.15)]">
              <img src="youtube.png" alt="Youtube" className="scale-50" />
            </div>
            <div className="about-foundance rounded-3xl text-white flex flex-col items-center justify-center text-4xl font-bold border-solid border-white border-8 bg-[rgba(255,255,255,0.15)]">
              <img src="foundance-logo.png" alt="Foudance" className="scale-75" />
            </div>
          </div>
          <div className="flex lg:hidden w-full h-fit">
            <div className="about-heading rounded-3xl text-black flex flex-col justify-center border-solid border-white border-8 px-8 bg-[rgba(255,255,255,0.15)]">
              <h1 className="heading underline decoration-white decoration-solid text-white w-[100%] text-4xl font-bold my-6">About Us</h1>
              <p className="w-full flex justify-center text-center text-white text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae autem accusantium voluptatem consequuntur incidunt, non corrupti aspernatur dolores neque voluptatibus eligendi distinctio, at laborum nihil! Magni minima officiis nam earum veritatis est maiores nihil atque numquam amet dicta quos quia enim rem magnam, consequatur unde.</p>
              <div className="logos flex flex-row w-full justify-center items-center">
                <div className="about-linkedin rounded-3xl text-black flex justify-center items-center">
                  <img src="linkedin.png" alt="LinkedIn" className="scale-50" />
                </div>
                <div className="about-discord rounded-3xl text-black flex justify-center items-center">
                  <img src="discord.png" alt="Discord" className="scale-50" />
                </div>
                <div className="about-youtube rounded-3xl text-black flex justify-center items-center">
                  <img src="youtube.png" alt="Youtube" className="scale-50" />
                </div>
                <div className="about-foundance rounded-3xl text-black flex justify-center items-center">
                  <img src="foundance.png" alt="Foudance" className="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  );
}
export default About;
