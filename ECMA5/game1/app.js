window.addEventListener("load", function(){
    var canvas = document.querySelector(".game-canvas"); // 선택자 . : 뒤 이름의 class 를찾음
    // var img = document.querySelector("img");
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img, 100, 100);
    }
    img.src = "boy.png";


    // #은 id를 찾음.
    /** 집단지성 */
    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");
    
    ctx.drawImage(img, 100, 100);

    // 비동기
    // 동기
    // src io 작업 시간걸림
    

});