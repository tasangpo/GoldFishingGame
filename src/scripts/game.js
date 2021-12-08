import Shark from "./shark.js"
import Gold from "./gold.js"
import Player from "./player.js";

const GAME_DEFAULTS = {
    DIM_X: 1000,
    DIM_Y: 600,
    NUM_SHARKS: 5,
    NUM_GOLD: 5
}

const GAME_DEFAULTS2 = {
    DIM_X: 1000,
    DIM_Y: 600,
    NUM_SHARKS: GAME_DEFAULTS.NUM_SHARKS * 2,
    NUM_GOLD: 5
}



class Game {
    constructor() {
        this.sharks = [];
        this.golds = [];
        this.players = [];
        this.lines = [];
        this.level = 1;

        this.addSharks();
        this.addGolds();
    }

    addSharks() {
        let numSharks = GAME_DEFAULTS.NUM_SHARKS * this.level;
        while (this.sharks.length < numSharks) {
            let randomPos = this.randomPosition(GAME_DEFAULTS.DIM_X, GAME_DEFAULTS.DIM_Y);

            let shark = new Shark({pos: randomPos, game: this, vel: [Math.random() * 5 + 2, 0]});
            if (shark.pos[1] > 125 && shark.pos[1] < 450 && shark.pos[0] > shark.width && shark.pos[0] < GAME_DEFAULTS.DIM_X - shark.width) { // sharks pos should be greater than 100 (aka sea level)
                this.sharks.push(shark);
            }
        }
    }

    addGolds() {
        while (this.golds.length < GAME_DEFAULTS.NUM_GOLD) {
            let randomPos = this.randomPosition(GAME_DEFAULTS.DIM_X, GAME_DEFAULTS.DIM_Y);

            let gold = new Gold({ pos: randomPos, game: this});
            if (gold.pos[0] > 50 && gold.pos[0] < 950 && gold.pos[1] > 450 && gold.pos[1] < 550) { 
                this.golds.push(gold);
            }
        }
    }

    addPlayer() {
        const player = new Player({game: this})
        this.players.push(player);
        return player;
    }

    addLine(line) { // line is an instance of a fishing line
        this.lines.push(line);
    }

    draw(ctx) {
        //
        this.updateStats();
        const skyImg = new Image();
        const oceanImg = new Image();

        skyImg.src = "src/images/stars.png"
        oceanImg.src = "src/images/jellyfish.jpg"

        ctx.drawImage(skyImg, 0, 0, 1000, 100)
        ctx.drawImage(oceanImg, 0, 100, 1000, 500)

        this.drawSharks(ctx);
        this.drawGolds(ctx);
        if (this.players.length) {
            this.players[0].draw(ctx);
        }
        

        if (this.lines.length) {
            this.lines[this.lines.length - 1].move(ctx);
        }
        this.goldCollision();
        this.sharkCollision();
    }

    randomPosition(x, y) {
        return [x * Math.random(), y * Math.random()]
    }

    drawSharks(ctx) {
        this.sharks.forEach(function(shark) {
            shark.draw(ctx);
        })
    }

    drawGolds(ctx) {
        this.golds.forEach(function (gold) {
            gold.draw(ctx);
        })
    }

    updateStats() {
        const level = document.getElementById("level");
        level.innerText = `Level: ${this.level}`
        const goldCount = document.getElementById("gold");
        goldCount.innerText = `Gold Remaining: ${this.golds.length}`
    }

    moveSharks(ctx) {
        const players = this.players;
        this.sharks.forEach(function (shark) {
            if (shark.pos[1] < 100) {
                players.shift();
                // alert("GAME OVER!")
                let message = document.getElementById("game-over");
                message.style.visibility = "visible"
            } else {
                shark.move(ctx);
            }        
        })
        this.draw(ctx);
        if (!this.golds.length) {
            this.level += 1;
            this.addSharks();
            this.addGolds();
        }
    }

    goldCollision() {
        if (this.lines.length) {
            const line = this.lines[0];
            const lines = this.lines;
            const lineMid = line.pos[0] + 25;   // width of line is 50px so this would be center of line
            const goldArr = this.golds;

            this.golds.forEach(function (gold) {
                if (lineMid > gold.pos[0] && lineMid < gold.pos[0] + 50) {
                    if (line.height > gold.pos[1] - line.pos[1] + 20) { // +20 if an offset to visually show line hitting gold
                        let goldIdx = goldArr.indexOf(gold);
                        goldArr.splice(goldIdx, 1);
                        lines.shift();
                    }
                }
            })
        }
    }

    sharkCollision() {
        if (this.lines.length) {
            const lines = this.lines;
            const line = lines[0];
            const lineMid = line.pos[0] + 25;

            this.sharks.forEach(function(shark) {
                if ((line.height > shark.pos[1] - line.pos[1] + 20) && (lineMid > shark.pos[0] && lineMid < shark.pos[0] + shark.width)){
                    lines.shift();
                    shark.img.src = "src/images/shark_vertical.png"
                    shark.vel = [0, -5]
                }
            })
        }

    }

}

export default Game;


