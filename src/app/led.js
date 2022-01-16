import {StudioLed} from "studioled";

export const led = new StudioLed({
	element: document.querySelector(".game-screen__led"),
	width: 55,
	height: 100,
});
