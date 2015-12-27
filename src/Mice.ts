/**
 *
 * @author 
 *
 */
class Mice extends egret.Shape{
    public m_Game:Game;
    public m_id: number;
    public m_Timer: egret.Timer;
    public m_nColor: number;
    public m_nRadius: number;
    public m_nX: number;
    public m_nY: number;
    public m_nCurColor: number;
    public m_nState: number;
    public constructor(game: Game,id: number,color: number) {
        super();
        this.m_Game = game;
        this.m_id = id;
        this.m_nColor = color;
        this.m_nState = 0;
	}
	
	public draw(x:number, y:number, r:number):void {
        this.m_nRadius = r;
        this.m_nX = x;
        this.m_nY = y;
        this.m_nCurColor = 0x000033;
        this.graphics.beginFill(this.m_nCurColor);
        this.graphics.drawCircle(x, y, r);
        this.graphics.endFill();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchMice,this);
	}
	
	public onTouchMice(evt:egret.TouchEvent):void {
	    if (evt.type == egret.TouchEvent.TOUCH_TAP && this.m_Game.m_bTouchable){
            this.m_nCurColor = this.m_nColor;
            this.graphics.beginFill(this.m_nCurColor);
            this.graphics.drawCircle(this.m_nX,this.m_nY,this.m_nRadius);
            this.graphics.endFill();
            this.m_Timer = new egret.Timer(1000,1);
            this.m_Timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerFinish, this);
            this.m_Timer.start();
            if(this.m_Game.m_nLastIdx != -1){
                this.m_Game.m_bTouchable = false;
            }
	    }
	}
	
	public onTimerFinish(evt:egret.TimerEvent):void {
        console.log("timer finish!");
        this.m_Game.m_bTouchable = true;
        if(this.m_Game.m_nLastIdx == -1) {
            this.m_Game.m_nLastIdx = this.m_id;
            this.touchEnabled = false;
        }
        else {
            var idx = this.m_Game.m_nLastIdx;
            this.m_Game.m_nLastIdx = -1;
            console.info(this.m_Game.m_Mice[idx].m_nCurColor,this.m_nCurColor);
            if(this.m_id != idx && this.m_Game.m_Mice[idx].m_nCurColor == this.m_nCurColor) {           
                this.touchEnabled = false;
                this.m_nState = 1;
                this.m_Game.m_Mice[idx].m_nState = 1;
                var isFinish = true;
                for(var i = 0;i < this.m_Game.m_Mice.length; i++){
                    if (this.m_Game.m_Mice[i].m_nState == 0){
                        isFinish = false;
                    }
                }
                if (isFinish){
                    alert("game over, you win!");
                }
            }
            else {
                this.m_nCurColor = 0x000033;
                this.graphics.beginFill(this.m_nCurColor);
                this.graphics.drawCircle(this.m_nX,this.m_nY,this.m_nRadius);
                this.graphics.endFill();
                this.touchEnabled = true;
                
                this.m_Game.m_Mice[idx].m_nCurColor = 0x000033;
                this.m_Game.m_Mice[idx].graphics.beginFill(this.m_Game.m_Mice[idx].m_nCurColor);
                this.m_Game.m_Mice[idx].graphics.drawCircle(
                    this.m_Game.m_Mice[idx].m_nX,
                    this.m_Game.m_Mice[idx].m_nY,
                    this.m_Game.m_Mice[idx].m_nRadius);
                this.m_Game.m_Mice[idx].graphics.endFill();
                this.m_Game.m_Mice[idx].touchEnabled = true;
            }
        }
	}
}
