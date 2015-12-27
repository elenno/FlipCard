/**
 *
 * @author 
 *
 */
class Game extends egret.DisplayObjectContainer{
    public m_Board: egret.Shape;
    public m_Mice: Mice[];
    public m_nLastIdx: number;
    public m_nFinishCount: number;
    public m_nColorArray: number[] = [0x0033FF,0x00CC33,0x990033,0x9933FF,0xFFFF33];
    public m_bTouchable: boolean;
    
    public constructor() {
        super();
	}
	public game_start() : void {
        this.m_nLastIdx = -1;
        this.draw_board();
        this.draw_mice();
        this.m_bTouchable = true;
	}
	
	public draw_board() : void {
        this.m_Board = new egret.Shape();
        this.m_Board.graphics.beginFill(0xFFD39B);
        this.m_Board.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight);
        this.m_Board.graphics.endFill();
        this.addChild(this.m_Board);
        //this.setChildIndex(this.m_Board,0);
	}
	
	public draw_mice() : void {
        this.m_Mice = new Array<Mice>();
        for(var i = 0;i < 10;i++) {
            console.info("color ",i % 5,":",this.m_nColorArray[i % 5]);
            this.m_Mice.push(new Mice(this,i,this.m_nColorArray[i % 5]));
        }
        for(var i = 0;i < 10;i++) {
            this.m_Mice[i].draw(i * 30 + 50,i * 30 + 50,10);
            this.addChild(this.m_Mice[i]);
            //this.setChildIndex(this.m_Mice[i],this.m_Mice[i].m_id + 1);
        }
	}
}
