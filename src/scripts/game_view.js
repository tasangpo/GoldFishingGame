const MOVES = {
    a: [-1, 0],
    d: [1, 0]
}

class GameView {
    constructor(game, ctx) {
        this.ctx = ctx;
        this.game = game;
        this.player = this.game.addPlayer();
        this.paused = false;        
    }

    start() {
        this.bindKeyHandlers();
        const moveBind = this.game.moveSharks.bind(this.game, this.ctx);
        setInterval(moveBind, 20);
    }

    bindKeyHandlers() {
        const player = this.player;
        const game = this.game

        Object.keys(MOVES).forEach(function(ele) {
            const move = MOVES[ele];
            key(ele, function() {player.power(move)});
        })

        key("space", function() {player.castLine()})
        key("p", function () { Object.freeze(game)})
    };

}

export default GameView;