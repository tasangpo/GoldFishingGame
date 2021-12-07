import Player from "./player";

const SHARK_DEFAULTS = {
    WIDTH: 100,
    HEIGHT: 50
}

class Shark {

    constructor(options) {
        this.pos = options.pos
        this.vel = options.vel;
        this.width = SHARK_DEFAULTS.WIDTH;
        this.height = SHARK_DEFAULTS.HEIGHT;
        this.game = options.game;
        this.img = new Image();
    }

    draw(ctx) {
        // ctx.fillStyle = "#696969"
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);

        if (this.vel[0] > 0){
            this.img.src = "src/images/shark.png"
        } else if (this.vel[0] < 0){ 
            this.img.src = "src/images/shark_flipped.png"
        } else {
            this.img.src = "src/images/shark_vertical.png"
        }
        
        ctx.drawImage(this.img, this.pos[0], this.pos[1], this.width, this.height)
    }

    move(ctx) {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];


        if (this.pos[0] < 0 || this.pos[0] > ctx.canvas.width - this.width) {
            this.vel[0] *= -1;
        }
    }


}

export default Shark;




 




