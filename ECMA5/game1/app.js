window.addEventListener("load", function(){

    var canvas = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
    canvas.onclick = function() {
        console.log("canvas clicked");
        boy2.move(2);
        boy2.draw(ctx);   
    }
    // var img = new Image();
    // img.src = "boy.png";
    
    // #은 id를 찾음.
    /** 집단지성 */
    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");

    
    function boy(x,y){
            this.x = x || 100;
            this.y = y || 100;
            // var dx = 100*arguments[2];
            // var dy = 100*arguments[3];
    
            this.sw = 106;
            this.sh = 148.25;
            this.sx = this.sw*1;
            this.sy = this.sh*2;
            
    }

    boy.prototype = {
        draw : function(ctx){
            img = new Image();
            img.src = "boy.png";
            img.onload = function(){
                console.log(this);
                
                ctx.drawImage(img,
                    this.sx,this.sy,this.sw,this.sh,
                    this.x,this.y,106,148.25);
            }.bind(this);
        },
        move : function(dir){
            switch(dir){
                case 1:
                    this.y -= 10;
                    break;
                case 2:
                    this.x += 10;
                    break;
                case 3:
                    this.y += 10;
                    break;
                case 4:
                    this.x -= 10;
                    break;
            }
        }
    }
                        
    var boy1 = new boy();
    boy1.draw(ctx);           
                    
    var boy2 = new boy();
    boy2.draw(ctx);
    boy2.move(2);
    boy2.draw(ctx);                    

                    
    // function Box() {
                        
    // }

    // Box.prototype = {
    //     test:function(){
    //         console.log(this);
         
    //     }
    // }

    // var box1 = new Box();
    // box1.test();
    // var f1 = box1.test;
    // f1(); // windows.f1();
    
    // var obj = {kor:2};
    // obj.f1 = box1.test;
    // obj.f1();
    // obj.onload = box1.test;

    // var n1 = {id:1, title:'hello'};
    // obj.onload.call(n1);
    // obj.onload.apply(n1,['hi','okay']);
    // obj.f1();



    
    // ctx.drawImage(img, 100, 100);
    // ctx.drawImage(img, 100, 100, 106, 148.25);
    

    // 비동기
    // 동기
    // src io 작업 시간걸림
    

});