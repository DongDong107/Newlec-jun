function GameCanvas() {
    this.dom = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
    this.boy = new boy(100,100);
      /** @type {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");
    this.dom.onclick = this.clickHandler.bind(this); //콜백함수

    
}

GameCanvas.prototype = {

    run: function(){
        // 초당 60프레임 화면을 다시 그리는 코드
        this.update(); //지웠다가 ()
        this.draw(); //다시 그리기

        window.setTimeout(function(){
            console.log("time out");
        }, 10000)
    },
    update: function(){

    },
    draw: function(){
        this.boy.draw(this.ctx);
    },
    // ----- event -----

    clickHandler: function(){
        this.boy.move(2);
        this.boy.draw(this.ctx);   
    }
};
