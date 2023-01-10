import Title from "../story/title";

export default class StoryCanvas{
    constructor(){
       this.dom = document.querySelector(".story-canvas");
       this.ctx = this.dom.getContext("2d");
       this.title = new Title();
    }

    run(){
        this.draw();
    }

    draw(){
        this.title.draw(this.ctx);
    }

}