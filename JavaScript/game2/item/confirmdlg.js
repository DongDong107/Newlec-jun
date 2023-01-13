export default class ConfirmDlg{
    
    constructor() {
        this.x = 100;
        this.y = 100;
        this.width = 400;
        this.height = 200;
                
        // 컨티뉴 선택 창으로 부터의 X,Y 좌표
        this.btnYes = {
            x:70,
            y:100,
            width:100,
            height:50,
            label:'YES'
        };

        this.btnNo = {
            x:230,
            y:100,
            width:100,
            height:50,
            label:'NO'
        };

        this.btnEnd = {};
        
        this.isVisible = false;
        
        this.onContinue = false;
        this.onEnd = false;
        this.onclick = null;
    }

    // 윈도우로서 사용자 입력 이벤트를 수신하기 위한 함수
    notifyClick(x,y){
        // 자식이 있다면 자식에게도 이 이벤트를 통지해야 한다.
        // 하지만 자식이 아직 분가를 하지 않았다면 내가 체크해서 통지를 하면 된다.
        // 내가 클릭됐을까
        if((this.x < x && x < this.x+this.width) && (this.y < y && y < this.y+this.height)){
            console.log("난가?");

            if(this.onclick)
                this.onclick(3); //1을 받으면 dlg, 2는 yes, 3은 no
        }
    }       

    show(){
        this.isVisible = true;
    }

    draw(ctx){
        
        if(!this.isVisible)
            return;

        let {x,y} = this;

        
        ctx.fillStyle = '#FFF7';
        ctx.fillRect(x, y, this.width, this.height);
        
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, this.width, this.height);
        
        ctx.fillStyle = 'black'
        ctx.font = 'bold 48px serif'
        ctx.fillText('Continue?', this.width/2, y+70);
        
        let btns = [this.btnYes, this.btnNo];
        let colors = ['gray' , 'black'];
        
        for(let btn of btns){
            let{x, y, width:w , height:h, label} = btn;                    
        
            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x+x, this.y+y, w, h);
            ctx.fillStyle = 'black';
            ctx.strokeRect(this.x+x, this.y+y, w, h);
            ctx.font = 'bold 30px serif';
            ctx.fillText(label,this.x+x+20, this.y+135);
        }       
    }

    update(){

    }
   
}