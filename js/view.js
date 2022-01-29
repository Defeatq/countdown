import { formatDuration } from 'date-fns';

export const UI_ELEMENTS = {
	COUNTDOWN_TIME: document.querySelector('.countdown__body'),
	COUNTDOWN_DISPLAY: document.querySelector('.countdown__display'),
};

export function renderTime(timeUnits) {
	UI_ELEMENTS.COUNTDOWN_DISPLAY.textContent = formatDuration(timeUnits);
}