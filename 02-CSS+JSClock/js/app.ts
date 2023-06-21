const secondHand: HTMLDivElement = document.querySelector('.second-hand')!;
const minuteHand: HTMLDivElement = document.querySelector('.min-hand')!;
const hourHand: HTMLDivElement = document.querySelector('.hour-hand')!;

function setDate() {
	const now = new Date();

	// Moving the second hand
	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.rotate = `${secondsDegrees}deg`;

	// Moving the minute hand
	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + 90;
	minuteHand.style.rotate = `${minutesDegrees}deg`;

	// Moving the hour hand
	const hour = now.getHours();
	const hourDegrees = (hour / 12) * 360 + 90;
	hourHand.style.rotate = `${hourDegrees}deg`;
}

setInterval(setDate, 1000);
