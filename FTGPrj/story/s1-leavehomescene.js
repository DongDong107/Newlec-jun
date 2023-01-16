export default class LeaveHomeScene{
    constructor() {
        this.x = 0;
        this.y = 0;        

        this.audio = new Audio();
        this.audio.src = "../audio/sound/scene1.mp3";
        this.audio.loop = false;

        this.img = new Image();
        this.img.src = "../img/S1.jpg";
    }

    draw(ctx){
        ctx.drawImage(this.img,0,0,1400,700,0,0,1400,700);
        this.audio.play();
    }

    update() {
        
    }


}