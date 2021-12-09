import Line from "./line.js"

const PLAYER_DEFAULTS = {
    WIDTH: 200,
    HEIGHT: 75,
    POS: [450, 50],
}

class Player {
    constructor(options) {
        this.pos = PLAYER_DEFAULTS.POS;
        this.width = PLAYER_DEFAULTS.WIDTH;
        this.height = PLAYER_DEFAULTS.HEIGHT;
        this.game = options.game;
    }
    
    draw(ctx) {
        // ctx.fillStyle = "#FFD700"
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        const img = new Image();
        img.src = "src/images/boat.png"
        ctx.drawImage(img, this.pos[0], this.pos[1], this.width, this.height)
    }

    // move(ctx) {
    //     // this.pos[0] += this.vel[0];
    //     // this.pos[1] += this.vel[1];
    //     // if (this.pos[0] < 0 || this.pos[0] > ctx.canvas.width - this.width) {
    //     //     this.vel[0] *= -1;
    //     // }
    // } 
    power(impulse) {
        this.pos[0] += impulse[0] * 15;
        if (this.pos[0] < 0) {
            this.pos[0] = 0;
        } else if (this.pos[0] > 900) {
            this.pos[0] = 900;
        } 
    }

    castLine() {
        this.game.lines.shift();
        const startingPos = [this.pos[0] + 75, this.pos[1] + 55];
        const line = new Line({game: this.game, pos: startingPos})
        this.game.addLine(line);
    } 

}

export default Player;