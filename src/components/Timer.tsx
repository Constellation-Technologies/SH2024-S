import React, { useEffect, useState } from "react";
import "../styles/Timer.css";

const Timer = () => {
	// Define the end date
	const targetDate = new Date("2024-07-14T00:00:00");

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	// Calculate time left
	const calculateTimeLeft = () => {
		const now = new Date();
		const difference = targetDate - now;

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		} else {
			// If the countdown is over, return zeros
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}
	};

	useEffect(() => {
		// Update time left every second
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="timer-container">
			<div className="timer-date">Countdown to July 14, 2024</div>
			<div className="timer-values">
				<span className="timer-number timer-purple">{timeLeft.days}</span>
				<span className="timer-colon">:</span>
				<span className="timer-number timer-blue">{timeLeft.hours}</span>
				<span className="timer-colon">:</span>
				<span className="timer-number timer-yellow">{timeLeft.minutes}</span>
				<span className="timer-colon">:</span>
				<span className="timer-number timer-red">{timeLeft.seconds}</span>
			</div>
		</div>
	);
};

export default Timer;
