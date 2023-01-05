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
        this.vy = 0 ;
    }

    draw(ctx){
        let img = new Image();
        img.src = "boy.png";
        img.onload = function(){
            console.log(this);
            
            ctx.drawImage(img,
                this.sx,this.sy,this.sw,this.sh,
                this.x,this.y,106,148.25);
        }.bind(this);
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
    }

    moveTo(dx,dy){
        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;

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

