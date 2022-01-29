import { UI_ELEMENTS, renderTime } from './view.js';
import Cookies from 'js-cookie';
import Countdown from 'countdown-js';

if (Cookies.get('timeLeft')) {
	setTime(Cookies.get('timeLeft'));
}

UI_ELEMENTS.COUNTDOWN_TIME.addEventListener('submit', (event) => {
	event.preventDefault();

	const endInMs = event.target.day.valueAsNumber +
                    event.target.time.valueAsNumber -
                    3 * 60 * 60 * 1000;

	if (Cookies.get('timeLeft')) {
		throw new Error('Already active');
	}

	setTime(endInMs);
});

function setTime(end) {
	Cookies.set('timeLeft', end, { expires: new Date(end) });
	Countdown.timer(end, timeLeft => {
		const timePeriodsInMs = {
			years: Math.floor(timeLeft.days / 365),
			months: Math.floor(timeLeft.days / 30),
			days: timeLeft.days,
			hours: timeLeft.hours,
			minutes: timeLeft.minutes,
			seconds: timeLeft.seconds,
		};

		renderTime(timePeriodsInMs);
	});
}