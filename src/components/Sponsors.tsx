import { useEffect } from "react";
import "../styles/Sponsors.css";

const Sponsors = () => {
	useEffect(() => {
		// Clone the first logos slide and append it to create an infinite loop
		const firstSlide = document.querySelector(".logosSlideFirst");
		if (firstSlide) {
			const firstSlideCopy = firstSlide.cloneNode(true);
			document.querySelector(".logosFirst")?.appendChild(firstSlideCopy);
		}

		// Clone the second logos slide and append it to the end to create an infinite loop
		const secondSlide = document.querySelector(".logosSlideSecond");
		if (secondSlide) {
			const secondSlideCopy = secondSlide.cloneNode(true);
			document.querySelector(".logosSecond")?.appendChild(secondSlideCopy);
		}
	}, []);

	return (
		<div className="sponsors-container">
			<img
				src="/white-background-wave.png"
				className="background-wave"
				alt=""
			/>
			<img src="/coral-reef.png" className="corals" alt="" />

			<div className="content">
				<h2 className="heading">Sponsors</h2>

				<div className="logos-container">
					<div className="logosFirst">
						<div className="logosSlideFirst">
							<img src="/logos/example-logo.png" alt="Logo 1" />
							<img src="/logos/example-logo.png" alt="Logo 2" />
							<img src="/logos/example-logo.png" alt="Logo 3" />
							<img src="/logos/example-logo.png" alt="Logo 4" />
							<img src="/logos/example-logo.png" alt="Logo 5" />
							<img src="/logos/example-logo.png" alt="Logo 6" />
							<img src="/logos/example-logo.png" alt="Logo 7" />
							<img src="/logos/example-logo.png" alt="Logo 8" />
						</div>
					</div>

					<div className="logosSecond">
						<div className="logosSlideSecond">
							<img src="/logos/example-logo.png" alt="Logo 9" />
							<img src="/logos/example-logo.png" alt="Logo 10" />
							<img src="/logos/example-logo.png" alt="Logo 11" />
							<img src="/logos/example-logo.png" alt="Logo 12" />
							<img src="/logos/example-logo.png" alt="Logo 13" />
							<img src="/logos/example-logo.png" alt="Logo 14" />
							<img src="/logos/example-logo.png" alt="Logo 15" />
							<img src="/logos/example-logo.png" alt="Logo 16" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
