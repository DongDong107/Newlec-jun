import LeaveHomeScene from "../story/s1-leavehomescene.js";
import Title from "../story/s0-title.js";

export default class StoryCanvas {
    constructor() {
        this.dom = document.querySelector(".story-canvas");
        this.ctx = this.dom.getContext("2d");

        this.title = new Title();
        this.s1 = new LeaveHomeScene();       
        this.scenes = [this.title, this.s1];
        this.page = 0;
        
        // 마우스 클릭, 이동 관련 이벤트 넣어주기 위해서 
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

    // 클릭 위치 찍기
    onclickhandler(e) {
        console.log(e);
        this.scenes[this.page].notifyClick(e.x,e.y);
    }

    // 마우스 이동 좌표 찍기
    onmousemovehandler(e){
        console.log(e.x,e.y);
        this.scenes[this.page].notifyMove(e.x, e.y);
    }

    // 뒤로 가기 버튼이 있는 좌표 눌럿을 때
    backbtnclickhandler(e) {
        if(this.scenes[this.page].backbtnclicked){
            if (this.page === 0)
                return;
            else
                this.page--;
        }

        this.scenes[this.page].backbtnclicked = false;
    }

    // 앞으로 가기 버튼이 있는 좌표 눌럿을 때
    forwardbtnclickhandler() {
        if(this.scenes[this.page].fwdbtnclicked){

            if (this.page === this.scenes.length - 1)
                return;
            else
                this.page++;
        }
        
        this.scenes[this.page].fwdbtnclicked = false;
    }


}