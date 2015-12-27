/**
 *
 * @author 
 *
 */
class ViewMgr extends egret.DisplayObjectContainer{
    public m_BlockArray: Block[];
    public m_Background: egret.Bitmap;
    public m_StartButton: egret.TextField;
    public m_DataMgr: DataMgr;
    public constructor() {
        super();
        this.m_DataMgr = new DataMgr();
	}
	
	public createStartScene(): void{
	    //load background and start button
        this.m_Background = new egret.Bitmap();
        this.m_Background.texture = RES.getRes("bgImage");
        this.addChild(this.m_Background);
        
        this.m_StartButton = new egret.TextField();
        this.m_StartButton.text = "开始游戏";
        this.m_StartButton.touchEnabled = true;
        this.m_StartButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartGame,this);
        this.addChild(this.m_StartButton);
    }
    
    public onStartGame(): void{
        this.removeChild(this.m_StartButton);
        this.createGameScene();
    }
    
    public createGameScene(): void{    
        //load pictures
        this.m_BlockArray = new Array<Block>();
        for(var i = 0;i < 20; i++)
        {
            this.m_BlockArray[i] = new Block("pic"+(i%10));
            this.m_BlockArray[i].texture = RES.getRes("pic");
            this.m_BlockArray[i].width = 45;
            this.m_BlockArray[i].height = 70;
            this.m_BlockArray[i].x = (i % 10) * this.m_BlockArray[i].width;
            if(i < 10)
                this.m_BlockArray[i].y = 0;
            else
                this.m_BlockArray[i].y = this.m_BlockArray[i].height;    
            this.addChild(this.m_BlockArray[i]);
            this.m_BlockArray[i].init();
        }
        
    }
    
    
}
