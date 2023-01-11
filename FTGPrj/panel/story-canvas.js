import Scene1 from "../story/scene1.js";
import Title from "../story/title.js";

export default class StoryCanvas{
    constructor(){
       this.dom = document.querySelector(".story-canvas");
       this.ctx = this.dom.getContext("2d");

       this.title = new Title();
       this.s1 = new Scene1();
       this.scenes = [this.title,this.s1];       
       this.num = 0;

       this.backImg = document.querySelector("#back");       
       this.forwardImg = document.querySelector("#forward");
       

       this.dom.onclick = this.onclickhandler.bind(this);
    
    }

    run(){

        this.update();
        this.draw();

        window.setTimeout(()=>{this.run()},17);
    }

    update(){
        this.num = this.num;
    }

    draw(){
        
        this.scenes[this.num].draw(this.ctx);
        this.ctx.drawImage(this.backImg, 0,0,550,550,
            0,0,100,100);
        this.ctx.drawImage(this.forwardImg, 0,0,550,550,
            100,0,100,100);
                        
    }
    
    이벤트
    onclickhandler(e){
        console.log(e.x,e.y);
        if((0<e.x&&e.x<100)&&(0<=e.y&&e.y<100)){
            if(this.num === 0) 
                return;
            else
                this.num--;
        }
        else if((100<e.x&&e.x<200)&&(0<=e.y&&e.y<100)){

            if(this.num === this.scenes.length-1) 
                return;
            else
                this.num++;
        }
    }

    backbtnclickhandler(e){
        
        if(this.num === 0)
            return;
        else
            this.num--;
    }

    forwardbtnclickhandler(e) {
        console.log(e.x,e.y);
        if((0<e.x&&e.x<100)&&(0<=e.y&&e.y<100)){
            if(this.num === 0) 
                return;
            else
                this.num;
        }
        else if((100<e.x&&e.x<200)&&(0<=e.y&&e.y<100)){

            if(this.num === this.scenes.length-1) 
                return;
            else
                this.num++;
        }
    }

}