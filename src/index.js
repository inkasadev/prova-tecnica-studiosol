import {led} from "./app/led";
import {startGame} from "./app/game";
import "./index.css";

led.setValue(0);
led.addBreakpoint(960, 75, 135);
startGame();
