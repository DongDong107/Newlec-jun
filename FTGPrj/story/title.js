export default class Title{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.img = document.querySelector("#title");
    }

    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y);
    }


}