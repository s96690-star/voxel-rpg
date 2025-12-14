import { Game } from "./src/engine/GameLoop.js";

const canvas = document.getElementById("game");

canvas.width = innerWidth;
canvas.height = innerHeight;

const game = new Game(canvas);
game.start();
