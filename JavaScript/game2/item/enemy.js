export default class Enemy{
    #centerx;
    #centery;
    constructor(x,y,fun){
        this.x = x || 0;
        this.y = y || 0;        

        this.speed = 1;        
        this.onOutOfScreen = fun || null;
        this.img = document.querySelector("#enemy");
        this.exploImg = document.querySelector("#explosion");
        
        //[e]xplosion [i]ndex
        this.eix = 0;
        this.eiy = 0;
        this.esw = this.exploImg.width/4;
        this.esh = this.exploImg.height/5;

        this.expOrder = 0;

        this.isChungdol = false;
    }

    get centerx(){
        return this.x + this.img.width/2;
    }

    get centery(){
        return this.y + this.img.height/2;
    }

    get enemyr(){
        return this.img.width/2;
    }

    chungdol(){
    
        this.isChungdol = true;
    }

    draw(ctx){

        this.esx = this.esw * this.eix;
        this.esy = this.esh * this.eiy;

        ctx.drawImage(this.img,this.x - this.img.width/2,this.y - this.img.height*1.2);

        if(this.isChungdol){

            ctx.drawImage(this.exploImg,this.esx,this.esy,this.esw,this.esh,
            this.x-this.esw/2,this.y-this.esh+15,this.esw,this.esh);            
            this.expOrder++;
        }
        // this.x-this.sw/2,this.y-this.sh+15
        
    }

    update(){
        this.y += this.speed;
        
        this.eiy = Math.floor(this.expOrder / 4);
        this.eix = this.expOrder % 4;

        // if(this.expOrder == 18)
        //     this.expOrder = 0;

        if(this.y > 450)
            if(this.onOutOfScreen != null)
                this.onOutOfScreen(this);

        if(this.isChungdol && this.expOrder == 18 && this.onOutOfScreen != null)
                this.onOutOfScreen(this);
    }



}