export default class Title{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.img = document.querySelector("#title");
        this.audio = document.querySelector("#tsaudio");
    }

    draw(ctx){
        ctx.drawImage(this.img,0,0,1400,700,0,0,1400,700);
        // ctx.play(this.audio);
    }


}