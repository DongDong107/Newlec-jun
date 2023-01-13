import GameCanvas from "./panel/game-canvas.js";
import RankCanvas from "./panel/rank-canvas.js";
import newlec from './newlec.js';

window.addEventListener("load", function(){                          
    const gameCanvas = new GameCanvas();
    gameCanvas.ongameOver = (e) => {
        //classList 는 클래스 이름. add로 스페이스 간격으로 추가 가능.
        gameCanvas.dom.classList.add("d-none");
        gameCanvas.pause = true;
        rankCanvas.dom.classList.remove("d-none");

    };
    gameCanvas.run();

    const rankCanvas = new RankCanvas();
    rankCanvas.run();
    

    newlec.x++;
    console.log("x : " + newlec.x);

});