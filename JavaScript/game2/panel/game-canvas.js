import Boy from '../item/boy.js';
import Background from '../item/back-ground.js';
import Enemy from '../item/enemy.js';

export default class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
        this.boy = new Boy(100,100);
        this.dom.focus();
        this.bg = new Background();
        this.enemy = new Enemy();
          /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.boy.speed++;
        this.dom.onclick = this.clickHandler.bind(this); //콜백함수
        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);
        
        //게임 상태변수
        this.gameover = false;
        this.pause = false;
    }

    
    run(){
        if(this.pause)
            return;

        // 초당 60프레임 화면을 다시 그리는 코드
        this.update(); //지웠다가 ()
        this.draw(); //다시 그리기
        
        console.log("timer start");
        window.setTimeout(()=>{this.run();},1);
        //window.setTimeout(this.run.bind(this), 1000)
    //     window.setTimeout(function(){
    //         this.run();
    //     })
        
    }

    update(){
        this.boy.update();
        this.enemy.update();
        // this.boy.kupdate();
    }    

    draw(){
        this.bg.draw(this.ctx);
        this.enemy.draw(this.ctx);
        this.boy.draw(this.ctx);
    }

    pause(){
        this.pause = true;
    }

    // ----- event -----
    
    clickHandler(e){
        
        this.boy.moveTo(e.x, e.y);
        // this.boy.move(2);
        // this.boy.draw(this.ctx);   
    }

    keyDownHandler(e){
       
        this.boy.move(e.key);        
    }

    keyUpHandler(e){
        // this.boy.kreset();
        this.boy.stop(e.key);
            
    }
}

// export default GameCanvas;