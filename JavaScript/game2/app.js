import GameCanvas from './panel/game-canvas.js';
import newlec from './newlec.js';

window.addEventListener("load", function(){

                          
    const gameCanvas = new GameCanvas();
    gameCanvas.run();
    // gameCanvas.pause();

    newlec.x++;
    console.log("x : " + newlec.x);

});