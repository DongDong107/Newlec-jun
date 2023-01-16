// 클래스명 바꿔주기
export default class Sample{

  constructor() {
    // 이미지 파일들 불러오는 부분 
    // (만약에 로드가 늦어져서 드로우가 안되는 현상이 반복되면 html에서 불러올 계획.)
    // this.img = document.querySelector("??"); 이런식으로

    // 버튼 이미지 불러오기
    this.backBtn = document.querySelector("#backbtn");
    this.backHoverBtn = document.querySelector("#backhoverbtn");
    this.forwardBtn = document.querySelector("#forwardbtn");
    this.fwdHoverBtn = document.querySelector("#fwdhoverbtn");
    this.playBtn = document.querySelector("#playbtn");
    this.pauseBtn = document.querySelector("#pausebtn");
    this.replayBtn = document.querySelector("#replaybtn");
    
    
    // 뒤로 가기 버튼 (1.클릭이 되었는지 2.버튼 이미지의 x,y좌표)
    this.backbtnclicked = false;
    this.backbtnx = 0;
    this.backbtny = 0;
    this.dirBtnSz = 100;
    
    // 앞으로 가기 버튼 
    this.fwdbtnclicked = false;
    this.fwdbtnx = 1300;
    this.fwdbtny = 0;

    // 재생 관련 버튼
    this.playBtnX = 650;
    this.pauseBtnX = 700;
    this.replayBtnX = 750;
    this.playBtnY = 650;
    this.playBtnSz = 50;
    
    // 장면 이미지 파일 불러오기 (src 임시)
    this.img = new Image();
    this.img.src = "../img/Title.jpg";
    
    // 오디오 파일 불러오기 (src 임시) , .loop 자동반복 false로 막음
    this.audio = new Audio();
    this.audio.src = "../audio/sound/title.mp3";
    this.audio.loop = false; 

    // 자막 관련
    this.fontlight = 0.0;
    this.fontlightspeed = 0.01;


    // story-canvas 에서 받아오는 클릭된 x,y 좌표 값 저장
    this.onclickx = null;
    this.onclicky = null;

    // story-canvas 에서 받아오는 움직이는 포인터 x,y 좌표 값 저장
    this.onmovex = null;
    this.onmovey = null;
  }

  draw(ctx){
    // 이미지 그리기
    ctx.drawImage(this.img, ~~~~~~);

    // 뒤로 가기 버튼 그리기
    if((this.backbtnx < this.onmovex && this.onmovex < 100) && (this.backbtny <this.onmovey && this.onmovey < 100)) {
      ctx.drawImage(this.backHoverBtn, 0,0,this.backHoverBtn.width, this.backHoverBtn.height,this.backbtnx, this.backbtny, this.dirBtnSz, this.dirBtnSz);
    }
    else
    ctx.drawImage(this.backBtn, 0,0,this.backBtn.width, this.backBtn.height,this.backbtnx, this.backbtny, this.dirBtnSz, this.dirBtnSz);
    
    // 앞으로 가기 버튼 그리기
    if((this.fwdbtnx<this.onmovex && this.onmovex < 1400) && (this.fwdbtny<this.onmovey && this.onmovey < 100)) {
      ctx.drawImage(this.fwdhoverbtn, 0,0,this.fwdhoverbtn.width, this.fwdhoverbtn.height,this.fwdbtnx, this.fwdbtny, this.dirBtnSz, this.dirBtnSz);
    }
    else
      ctx.drawImage(this.forwardBtn, 0,0,this.forwardBtn.width, this.forwardBtn.height,this.fwdbtnx, this.fwdbtny, this.dirBtnSz, this.dirBtnSz);    
    
    // 재생 관련 버튼 그리기 (재생, 일시정지, 다시재생)
    ctx.drawImage(this.playBtn, 0, 0, this.playBtn.width, this.playBtn.height, this.playBtnX, this.playBtnY, this.playBtnSz, this.playBtnSz);
    ctx.drawImage(this.pauseBtn, 0, 0, this.pauseBtn.width, this.pauseBtn.height, this.pauseBtnX, this.playBtnY, this.playBtnSz, this.playBtnSz);
    ctx.drawImage(this.replayBtn, 0, 0, this.replayBtn.width, this.replayBtn.height, this.replayBtnX, this.playBtnY, this.playBtnSz, this.playBtnSz);

}

update() {
    if((this.backbtnx < this.onclickx && this.onclickx < 100) && (this.backbtny < this.onclicky && this.onclicky < 100)) {
      this.backbtnclicked = true;
    }

    if((this.fwdbtnx<this.onclickx && this.onclickx < 1400) && (this.fwdbtny<this.onclicky && this.onclicky < 100)) {
        this.fwdbtnclicked = true;
    }

    this.onclickx = null;
    this.onclicky = null;

}

printSubtitle() {

}

// story-canvas에서 콜백함수통해서 x,y 좌표 설정해주는 메소드
notifyClick(x,y) {
    this.onclickx = x;
    this.onclicky = y;    
}

notifyMove(x,y) {
  this.onmovex = x;
  this.onmovey = y;
}

}