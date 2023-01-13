class Sample{

  constructor() {
    // 이미지 파일들 불러오는 부분 
    // (만약에 로드가 늦어져서 드로우가 안되는 현상이 반복되면 html에서 불러올 계획.)
    // this.img = document.querySelector("??");
    this.img = new Image();
    this.img.src = ~~~~;
    this.backBtnImg = new Image();
    this.backBtnImg.src = ~~~~;
    this.fwdBtnImg = new Image();
    this.fwdBtnImg.src = ~~~~;

    this.onclickx = null;
    this.onclicky = null;
    
    // 
    this.fwdbtnclicked = false;
    this.fwdbtnx = 1300;
    this.fwdbtny = 0;
  }

  draw(ctx){
        
    ctx.drawImage(this.img, ~~~~~~);
}

update() {
    if((this.fwdbtnx<this.onclickx && this.onclickx < 1400) && (this.fwdbtny<this.onclicky && this.onclicky < 100)) {
        this.fwdbtnclicked = true;
    }

}

notifyClick(x,y) {
    this.onclickx = x;
    this.onclicky = y;    
}

}