export default class Enemy{

    constructor(x,y,fun){
        this.x = x || 0;
        this.y = y || 0;
        this.speed = 1;        
        this.onOutOfScreen = fun || null;
        this.img = document.querySelector("#enemy");
    }

    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y);
    }

    update(){
        this.y += this.speed;

        if(this.y > 450)
            if(this.onOutOfScreen != null)
                this.onOutOfScreen(this);
    }

}