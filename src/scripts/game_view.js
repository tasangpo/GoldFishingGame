import Game from "./game";

const MOVES = {
    a: [-1, 0],
    d: [1, 0]
}



class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.player = this.game.addPlayer();     
        this.start = this.start.bind(this);  
    }

    start() {
        this.bindKeyHandlers();
        const moveBind = this.game.moveSharks.bind(this.game, this.ctx);
        setInterval(moveBind, 20);
        // const that = this;
        // const animation = requestAnimationFrame(this.animate.bind(this));

        // document.getElementById("reset-btn").addEventListener("click", function () {
        //     // window.cancelAnimationFrame(animation);
        //     clearInterval(inv);
        //     that.ctx.clearRect(0, 0, 1000, 600);
        //     // that.game = new Game();
        //     // that.start();
        //     const g = new Game();
        //     const gv = new GameView(g, that.ctx);
        //     gv.start();
        // }
        // )
        
    }

    // animate() {
    //     this.game.moveSharks(this.ctx)
    //     requestAnimationFrame(this.animate.bind(this));
    // }






    bindKeyHandlers() {
        const player = this.player;
        Object.keys(MOVES).forEach(function(ele) {
            const move = MOVES[ele];
            key(ele, function() {player.power(move)});
        })
        key("space", function() {player.castLine()})
    };

}

export default GameView;