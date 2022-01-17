/*
 * Observação: No teste diz que não podemos utilizar
 * bibliotecas criadas por terceiros para criar a lógica
 * do LED display. A biblioteca Studio LED foi criada por
 * mim para esse teste. Ela está incluída no arquivo zipado,
 * mas vocês podem obter mais informações sobre ela nos
 * links abaixo:
 *
 * github: https://github.com/inkasadev/studioled
 * npm: https://www.npmjs.com/package/studioled
 *
 */
import {led} from "./app/led";
import {startGame} from "./app/game";
import "./index.css";

// Define o valor inicial do led como 0;
led.setValue(0);
/*
 * Cria um breakpoint, fazendo com que os números tenham
 * a largura de 75px e a altura de 135px em telas com
 * o tamanho minimo de 960px;
 */
led.addBreakpoint(960, 75, 135);
// Inicia o jogo;
startGame();
