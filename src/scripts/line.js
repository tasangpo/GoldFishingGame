const LINE_DEFAULTS = {
    WIDTH: 50,
    HEIGHT: 15
}

class Line {
    constructor(options) {
        this.game = options.game;
        this.pos = options.pos;
        this.width = LINE_DEFAULTS.WIDTH;
        this.height = LINE_DEFAULTS.HEIGHT;
    }

    endPosY() {
        const sum = (this.pos[1] += this.height);
        return sum
    }

    draw(ctx) {
        const img = new Image();
        img.src = "src/images/rope.png"
        ctx.drawImage(img, this.pos[0], this.pos[1], this.width, this.height)
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }

    move(ctx) {
        this.height += 15;
        this.draw(ctx);

        if (this.height === 600) {
            this.game.lines.shift();
        }

    }
        // this.pos[1] += 15;




}

export default Line;