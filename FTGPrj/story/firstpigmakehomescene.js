export default class FirstPigMakeHomeScene{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.img = document.querySelector("#S2");
    }

    draw(ctx){
        ctx.drawImage(this.img,0,0,1400,700,0,0,1400,700);
    }

    update() {
        
    }


}