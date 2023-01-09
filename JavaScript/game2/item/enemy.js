export default class Enemy{

    constructor(){
        this.x = 0;
        this.y = 0;
        this.img = document.querySelector("#enemy");
    }

    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y,);
    }

    update(){

    }

}