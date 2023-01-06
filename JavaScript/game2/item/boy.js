class boy{
    constructor(x,y){

        this.x = x || 100;
        this.y = y || 100;
        // var dx = 100*arguments[2];
        // var dy = 100*arguments[3];

        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*1;
        this.sy = this.sh*2;
        
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;

        this.img = document.querySelector("#boy");
    }

    draw(ctx){
        // let img = new Image();
        // img.src = "boy.png";
        // img.onload = function(){
        //     console.log(this);
            
        // }.bind(this);
        ctx.drawImage(this.img,
            this.sx,this.sy,this.sw,this.sh,
            this.x-this.sw/2,this.y-this.sh+15, this.sw, this.sh);
    }

    update(){
        if((this.dx-1 <= this.x && this.x <= this.dx+1) ||
        (this.dy-1 <= this.y && this.y <= this.dy+1)){
            this.vx = 0;
            this.vy = 0;
        }
        this.x += this.vx;
        this.y += this.vy;
    }

    moveTo(dx,dy){
        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;

        this.dx = dx;
        this.dy = dy;

    }

    move(dir){
        switch(dir){
            case 1:
                this.y -= 1;
                break;
            case 2:
                this.x += 1;
                break;
            case 3:
                this.y += 1;
                break;
            case 4:
                this.x -= 1;
                break;
        }
    }

    
}

