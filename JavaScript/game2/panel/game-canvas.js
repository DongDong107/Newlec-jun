import Boy from '../item/boy.js';
import Background from '../item/back-ground.js';
import Enemy from '../item/enemy.js';
import newlec from '../newlec.js';

export default class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
        this.boy = new Boy(100,100);
        this.dom.focus();
        this.bg = new Background();
        this.enemies = [];

          /** @type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        
        // 컴포지션 상태였을때.
        // for(let enemy of this.enemies)
        //     enemy.onOutOfScreen = (en) => {
        //         let index = this.enemies.indexOf(en);
        //         this.enemies.splice(index,1);           

        //     };

        newlec.enemies = this.enemies;

        this.boy.speed++;

        this.dom.onclick = this.clickHandler.bind(this); //콜백함수
        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);
        
        // 여기서 정의 하던지.
        this.enemyOutOfScreenHandler = function(en) {
            let index = this.enemies.indexOf(en);
            this.enemies.splice(index,1);
        }.bind(this);

        //게임 상태변수
        this.gameover = false;
        this.pause = false;

        this.enDelay = 60;
    }

    
    run(){
        if(this.pause)
            return;

        // 초당 60프레임 화면을 다시 그리는 코드
        this.update(); //지웠다가 ()
        this.draw(); //다시 그리기
        
        console.log("timer start");
        window.setTimeout(()=>{this.run();},17);
        //window.setTimeout(this.run.bind(this), 1000)
    //     window.setTimeout(function(){
    //         this.run();
    //     })
        
    }

    update(){
        this.boy.update();
            
        for(let enemy of this.enemies)
            enemy.update();
        if(this.enDelay == 0)
        {
            let getRandomInt = (min, max) =>{
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random()*(max-min)) + min;
            }
            let x = getRandomInt(0,this.dom.width); // 캔버스
            let y = -50;
            
            // 정확하게 의미를 나타내기 위해선 이 방법이 더 좋은거같음.
            // let enemy = new Enemy(x,y);
            // enemy.onOutOfScreen = this.enemyoutofscreenhandler.bind(this);
            // this.enemies.push(enemy);

            this.enemies.push(new Enemy(x,y,this.enemyOutOfScreenHandler));
           
            this.enDelay = Math.floor(Math.random()*(60-30)) + 30;
        }
        // this.boy.kupdate();
        this.enDelay--;
    }    

    draw(){
        this.bg.draw(this.ctx);        
        for(let enemy of this.enemies)
            enemy.draw(this.ctx);
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

    // 적이 스크린밖으로 나갔을때 실행해야할 함수.
    // enemyoutofscreenhandler(en) {
    //     let index = this.enemies.indexOf(en);
    //     this.enemies.splice(index,1);
    // }


}

// export default GameCanvas;