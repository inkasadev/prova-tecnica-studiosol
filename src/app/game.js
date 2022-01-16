import {loadNumber} from "./services/fetch";
import {led} from "./led";
import {seed} from "./seed";

const _elements = {
	gameScreenStatus: document.querySelector(".game-screen__status"),
	gameScreenButton: document.querySelector(".game-screen__button"),
	gameInputTextfield: document.querySelector(".game-input__textfield"),
	gameInputButton: document.querySelector(".game-input__button"),
};

const toggleInputs = () => {
	_elements.gameInputTextfield.toggleAttribute("disabled");
	_elements.gameInputButton.toggleAttribute("disabled");
};

const showError = () => {
	_elements.gameScreenStatus.textContent = "ERRO";
	_elements.gameScreenStatus.classList.add("game-screen__status--error");
	_elements.gameScreenStatus.classList.remove("--hide");
	_elements.gameScreenButton.classList.remove("--hide");

	toggleInputs();

	led.setValue(502);
	led.setStatus("error");
};

const resetGame = () => {
	_elements.gameScreenStatus.classList.remove("game-screen__status--error");
	_elements.gameScreenStatus.classList.remove("game-screen__status--success");
	_elements.gameScreenStatus.classList.add("--hide");
	_elements.gameScreenButton.classList.add("--hide");

	led.setValue(0);
	led.setStatus("default");
};

const gameOver = () => {
	_elements.gameScreenStatus.classList.add("game-screen__status--success");
	_elements.gameScreenButton.classList.remove("--hide");

	toggleInputs();
	led.setStatus("success");
};

const updateGame = (value) => {
	const result =
		value < seed.value
			? "É menor"
			: value > seed.value
			? "É maior"
			: "Você acertou!!!!";

	led.setValue(value);

	_elements.gameScreenStatus.classList.remove("--hide");
	_elements.gameScreenStatus.textContent = result;

	if (value === seed.value) {
		gameOver();
	}
};

export const startGame = async () => {
	const response = await loadNumber();
	seed.value = response;

	if (typeof seed.value === "object") {
		showError();
		return;
	}

	resetGame();
};

_elements.gameInputButton.addEventListener("click", () => {
	const value = parseInt(_elements.gameInputTextfield.value);
	_elements.gameInputTextfield.value = "";

	if (isNaN(value) || value < 0) {
		_elements.gameInputTextfield.value = "";
		return;
	}

	updateGame(value);
});

_elements.gameScreenButton.addEventListener("click", () => {
	toggleInputs();
	resetGame();
	startGame();
});
