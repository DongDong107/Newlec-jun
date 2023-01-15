export default class Title{
    constructor() {
        this.x = 0;
        this.y = 0;

        this.onclickx = null;
        this.onclicky = null;
        this.fwdbtnclicked = false;
        
        // this.img = document.querySelector("#title");
        this.img = new Image();
        this.img.src = "../img/Title.jpg";
        // 이미지 스타일 js에서 손보기 
        // this.img.style
        this.forwardbtn = document.querySelector("#forwardbtn");
        this.fwdhoverbtn = document.querySelector("#fwdhoverbtn");
        this.pausebtn = document.querySelector("#pausebtn");

        this.audio = new Audio();
        this.audio.src = "../audio/testaudio1.mp3";        
        this.audio.loop = false;              
        
        this.fwdbtnx = 1300;
        this.fwdbtny = 0;
    }

    draw(ctx){
        
        
        ctx.drawImage(this.img,0,0,1400,700,0,0,1400,700);
        ctx.drawImage(this.pausebtn, 0, 0, this.pausebtn.width, this.pausebtn.height, 750, 650, 50, 50);        
        
        if((this.fwdbtnx<this.onmovex && this.onmovex < 1400) && (this.fwdbtny<this.onmovey && this.onmovey < 100)) {
            ctx.drawImage(this.fwdhoverbtn, 0,0,this.fwdhoverbtn.width, this.fwdhoverbtn.height,this.fwdbtnx, this.fwdbtny, 100, 100);
        }
        else
            ctx.drawImage(this.forwardbtn, 0,0,this.forwardbtn.width, this.forwardbtn.height,this.fwdbtnx, this.fwdbtny, 100, 100);    
        
    }

    update() {
        if((this.fwdbtnx<this.onclickx && this.onclickx < 1400) && (this.fwdbtny<this.onclicky && this.onclicky < 100)) {
            this.fwdbtnclicked = true;
        }        

        if((700<this.onclickx && this.onclickx < 750) && (650<this.onclicky && this.onclicky < 700)) {
            this.audio.play();            
        }
        if((750<this.onclickx && this.onclickx < 800) && (650<this.onclicky && this.onclicky < 700)) {
            this.audio.pause();
        }

        this.onclickx = null;
        this.onclicky = null;        

    }

    notifyClick(x,y) {
        this.onclickx = x;
        this.onclicky = y;
        // console.log(this.onclickx, this.onclicky);        
    }

    notifyMove(x,y) {
        this.onmovex = x;
        this.onmovey = y;
    }



}