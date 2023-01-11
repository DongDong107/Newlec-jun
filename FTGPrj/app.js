import GameCanvas from "./panel/game-canvas.js"
import StoryCanvas from "./panel/story-canvas.js";

window.addEventListener("load",function(){
       let gameCanvas = new GameCanvas();
       let storyCanvas = new StoryCanvas();

       gameCanvas.run();
       storyCanvas.run();
})