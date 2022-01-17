import {loadNumber} from "./services/fetch";
import {led} from "./led";
import {seed} from "./seed";

/*
 * É considerada uma boa prática selecionar elementos HTML
 * apenas uma vez no código, ao invés de fazermos isso toda
 * vez que precisarmos trabalhar com aquele elemento, por
 * questão de performance.
 */
const _elements = {
	gameScreenStatus: document.querySelector(".game-screen__status"),
	gameScreenButton: document.querySelector(".game-screen__button"),
	gameInputTextfield: document.querySelector(".game-input__textfield"),
	gameInputButton: document.querySelector(".game-input__button"),
};

/*
 * Ativa/Desativa os elementos .game-input__textfield e
 * .game-input__button;
 */
const toggleInputs = () => {
	_elements.gameInputTextfield.toggleAttribute("disabled");
	_elements.gameInputButton.toggleAttribute("disabled");
};

const showError = () => {
	// Exibe o texto "ERRO" no elemento .game-screen__status
	_elements.gameScreenStatus.textContent = "ERRO";
	/*
	 * Adiciona o modificador .game-screen__status--error
	 * no elemento game-screen__status;
	 */
	_elements.gameScreenStatus.classList.add("game-screen__status--error");
	/*
	 * Oculta os elementos game-screen__status e
	 * game-screen__button utilizando o modificador .--hide;
	 */
	_elements.gameScreenStatus.classList.remove("--hide");
	_elements.gameScreenButton.classList.remove("--hide");

	/*
	 * Ativa/Desativa os elementos .game-input__textfield e
	 * .game-input__button;
	 */
	toggleInputs();

	// Define o número do led display como 502;
	led.setValue(502);
	// Define o status do led display como "error";
	led.setStatus("error");
};

const resetGame = () => {
	/*
	 * Remove os modificadores .game-screen__status--error
	 * e .game-screen__status--success do elemento
	 * .game-screen__status;
	 */
	_elements.gameScreenStatus.classList.remove("game-screen__status--error");
	_elements.gameScreenStatus.classList.remove("game-screen__status--success");
	/*
	 * Oculta os elementos game-screen__status e
	 * game-screen__button utilizando o modificador .--hide;
	 */
	_elements.gameScreenStatus.classList.add("--hide");
	_elements.gameScreenButton.classList.add("--hide");

	// Define o número do led display como 0;
	led.setValue(0);
	// Define o status do led display como "default";
	led.setStatus("default");
};

const gameOver = () => {
	/*
	 * Adiciona o modificador .game-screen__status--success
	 * no elemento game-screen__status;
	 */
	_elements.gameScreenStatus.classList.add("game-screen__status--success");
	/*
	 * Exibe o elemento game-screen__button removendo
	 * o modificador .--hide;
	 */
	_elements.gameScreenButton.classList.remove("--hide");

	/*
	 * Exibe/Oculta os elementos .game-input__textfield e
	 * .game-input__button;
	 */
	toggleInputs();
	// Define o status do led display como "success";
	led.setStatus("success");
};

const updateGame = (value) => {
	/*
	 * Verifica se o número que o úsuario informou é
	 * maior, menor ou igual ao número gerado pela
	 * requisição;
	 */
	const result =
		value < seed.value
			? "É menor"
			: value > seed.value
			? "É maior"
			: "Você acertou!!!!";

	/*
	 * Define o número do led display como value (número
	 * digitado pelo úsuario);
	 */
	led.setValue(value);

	/*
	 * Exibe o elemento .game-screen__status removendo o
	 * modificador .--hide;
	 */
	_elements.gameScreenStatus.classList.remove("--hide");
	/*
	 * Exibe o texto da váriavel result no elemento
	 * .game-screen__status;
	 */
	_elements.gameScreenStatus.textContent = result;

	/*
	 * Caso o número digitado pelo úsuario seja igual
	 * ao número gerado pela requisição, chama a função
	 * gameOver();
	 */
	if (value === seed.value) {
		gameOver();
	}
};

// Inicia o jogo;
export const startGame = async () => {
	try {
		// Recebe um número aleatorio;
		const response = await loadNumber();
		// Armazena o número recebido em seed.value;
		seed.value = response;

		// Caso um erro ocorra, chama o método showError;
		if (typeof seed.value === "object") {
			showError();
			return;
		}
	} catch (e) {
		console.error(e);
	}

	// Reinicia a tela do jogo;
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
	/*
	 * Ativa/Desativa os elementos .game-input__textfield e
	 * .game-input__button;
	 */
	toggleInputs();
	// Reseta o jogo;
	resetGame();
	// Inicia o jogo;
	startGame();
});
