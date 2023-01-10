import GameCanvas from "./panel/game-canvas"
import StoryCanvas from "./panel/story-canvas";

window.addEventListener("load",function(){
       let gameCanvas = new GameCanvas();
       let storyCanvas = new StoryCanvas();

       gameCanvas.run();
       storyCanvas.run();
})