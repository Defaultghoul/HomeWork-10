// 1
let timerCounter = 0;
let timerid = setInterval(() => {
	timerCounter++;
	alert('Повідомлення');

	if (timerCounter == 5) {
		clearInterval(timerid);
	}
}, 1000);

// 2

const firstElement = document.querySelector('.elementSecond');
const secondElement = document.querySelector('.elementTwoSecond');

let timer = setInterval(() => {
	firstElement.style.width = Math.floor(Math.random() * 100) + 1 + 'px';
	firstElement.style.height = Math.floor(Math.random() * 100) + 1 + 'px';

	secondElement.style.fontSize = Math.floor(Math.random() * 100) + 1 + 'px';
}, 1000);

//3
const startbtn = document.querySelector('.startThree');
const scoreText = document.querySelector('.score');
const clicksText = document.querySelector('.clicks');
const timeText = document.querySelector('.time');
const clickElement = document.querySelector('.elementThree');

let clicks = 0;
let score = 0;
let timeLeft = 10;

let game = () => {
	clicks = 0;
	score = 0;
	timeLeft = 10;

	let gameInterval = setInterval(() => {
		timeLeft -= 1;

		timeText.textContent = `Time: ${timeLeft}`;

		if (timeLeft == 0) {
			clearInterval(gameInterval);
			clicksText.textContent = `Clicks: 0`;
		}
	}, timeLeft * 100);

	clickElement.addEventListener('click', () => {
		if (timeLeft != 0) {
			clicks += 1;
			clicksText.textContent = `Clicks: ${clicks}`;
			score = clicks / 2;
			scoreText.textContent = `Score: ${score}`;
		}
	});
};

//4

const inputFour = document.querySelector('.inputFour');

let messageFunc = () => {
	console.log(inputFour.value);
	let message = setInterval(() => {
		alert('Повідомлення');
	}, inputFour.value * 1000);
};
