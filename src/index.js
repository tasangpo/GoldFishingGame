import Game from "./scripts/game.js"
import GameView from "./scripts/game_view.js"

window.GameView = GameView;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const g = new Game();
    const gv = new GameView(g, ctx);


    document.getElementById("start-btn").addEventListener("click", function () {
        gv.start();
    })

})




