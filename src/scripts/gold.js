const GOLD_DEFAULTS = {
    WIDTH: 50,
    HEIGHT: 25
}


class Gold {
    constructor(options) {
        this.width = GOLD_DEFAULTS.WIDTH;
        this.height = GOLD_DEFAULTS.HEIGHT;
        this.pos = options.pos;
        this.game = options.game;
    }

    draw(ctx) {
        const img = new Image();
        img.src = "src/images/gold.png"
        ctx.drawImage(img, this.pos[0], this.pos[1], this.width, this.height)
    }

}

export default Gold;



