import GameCanvas from './panel/game-canvas.js';
import newlec from './newlec.js';
import RankCanvas from './panel/rank-canvas.js';

window.addEventListener("load", function(){

                          
    const gameCanvas = new GameCanvas();
    gameCanvas.run();
    const rankCanvas = new RankCanvas();
    rankCanvas.run();
    // gameCanvas.pause();

    newlec.x++;
    console.log("x : " + newlec.x);

});