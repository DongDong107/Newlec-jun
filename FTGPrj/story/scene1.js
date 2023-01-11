export default class Scene1{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.img = document.querySelector("#S1");
    }

    draw(ctx){
        ctx.drawImage(this.img,0,0,1400,700,0,0,1400,700);
    }


}