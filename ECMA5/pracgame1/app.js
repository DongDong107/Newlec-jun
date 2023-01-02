window.addEventListener("load",function(){

    var canvas = document.querySelector(".game-canvas");
    var ctx = canvas.getContext("2d");

    canvas.onclick = function(){
        boy2.move(1);
        boy2.draw();
    }

    /* @type{CanvasRenderingContext2D} */

    var img = new Image();
    img.src = "explosion.jpg";

    img.onload = function(){

        ctx.drawImage(img,160,120,160,120,100,100,160,120);
    }
    
    var boy = function(x,y) {

        this.x = x || 200; //x값이 없으면 falsy로 인한 false 값이 들어와서 200값으로 설정됨.        
        this.y = y || 100;

        this.sx = 160;
        this.sy = 120;
        this.sw = 160;
        this.sh = 120;

    }
    
    boy.prototype = {
        draw: function(){
            var img = new Image();
            img.src = "explosion.jpg";        
            img.onload = function(){
                ctx.drawImage(img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, 160, 120);
            }.bind(this);
        },
        move: function(dir){
            switch(dir){
                case 1:
                    this.y -= 15;
                    break;
                case 2:
                    this.x += 15;
                    break;
                case 3:
                    this.y += 15;
                    break;
                case 4:
                    this.x -= 15;
                    break;
            }
        }
    }

    var boy1 = new boy();
    boy1.draw();

    var boy2 = new boy();
    boy2.draw();
    boy2.move(3);
    boy2.draw();






















})