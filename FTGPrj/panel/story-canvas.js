import FirstPigMakeHomeScene from "../story/firstpigmakehomescene.js";
import LeaveHomeScene from "../story/leavehomescene.js";
import SeconePigMakeHomeScene from "../story/secondpigmakehomescene.js";
import Title from "../story/title.js";

export default class StoryCanvas {
    constructor() {
        this.dom = document.querySelector(".story-canvas");
        this.ctx = this.dom.getContext("2d");

        this.title = new Title();
        this.s1 = new LeaveHomeScene();
        this.s2 = new FirstPigMakeHomeScene();
        this.s3 = new SeconePigMakeHomeScene();

        
        this.scenes = [this.title, this.s1, this.s2, this.s3];
        this.page = 0;
        

        this.dom.onmousemove = this.onmousemovehandler.bind(this);
        this.dom.onclick = this.onclickhandler.bind(this);

    }

    run() {

        this.update();
        this.draw();       
        
        window.setTimeout(() => { this.run(); }, 17);
    }
    
    update() {
        this.scenes[this.page].update();
        
        this.forwardbtnclickhandler();
    }

    draw() {
        this.scenes[this.page].draw(this.ctx);      
    }

    //이벤트
    onclickhandler(e) {
        console.log(e);
        this.scenes[this.page].notifyClick(e.x,e.y);
    }

    onmousemovehandler(e){
        console.log(e.x,e.y);
        this.scenes[this.page].notifyMove(e.x, e.y);
    }

    backbtnclickhandler(e) {

        if (this.page === 0)
            return;
        else
            this.page--;
    }

    forwardbtnclickhandler() {
        if(this.scenes[this.page].fwdbtnclicked){

            if (this.page === this.scenes.length - 1)
                return;
            else
                this.page++;
        }
        // console.log(this.page);
        this.scenes[this.page].fwdbtnclicked = false;
    }


}