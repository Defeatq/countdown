export const UI_ELEMENTS = {
	COUNTDOWN_TIME: document.querySelector('.countdown__body'),
	COUNTDOWN_DISPLAY: document.querySelector('.countdown__display'),
};

export function renderTime(time) {
	UI_ELEMENTS.COUNTDOWN_DISPLAY.textContent = `
  Years: ${time.years}\nMonths: ${time.months}
  Days: ${time.days}\nHours: ${time.hours}
  Minutes: ${time.minutes}\nSeconds: ${time.seconds}`;
}