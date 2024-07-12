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
				<div className="container-about">
					<div className="grid">
						{/* COLUMN 1 */}
						<div className="column">
							<div className="box about-box">
								<h2>About</h2>
								<p>
									This exciting event is the perfect opportunity for developers,
									designers, and tech enthusiasts to come together and unleash
									their creativity. Over the course of the hackathon,
									participants will form teams, brainstorm innovative ideas, and
									develop cutting-edge solutions to real-world challenges.
								</p>
							</div>
							<div className="flex">
								<div className="box">
									<img src="/linkedin.png" alt="" />
								</div>
								<div className="box">
									<img src="/discord.png" alt="" />
								</div>
								<div className="box">
									<img src="/youtube.png" alt="" />
								</div>
							</div>
						</div>

						{/* COLUMN 2 */}
						<div className="column">
							<div className="box star-box">
								<img src="/star.png" alt="" />
							</div>
							<div className="box register-box">
								<h2>Register</h2>
								<h2>ON</h2>
								<div className="">
									<img src="/foundance.png" alt="" />
									<p>Foundance</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default About;
