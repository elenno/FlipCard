/**
 *
 * @author 
 *
 */
class Card extends egret.Bitmap{
    private m_nState: number;
    private m_nIdx: number;
    private m_sResName: string;
    
    public constructor(resName:string, idx:number) {
        super();
        this.m_sResName = resName;
        this.m_nIdx = idx;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
	
	public onTouchTap(evt:egret.Event){
        this.texture = RES.getRes(this.m_sResName);
        this.touchEnabled = false;
        var ret = DataMgr.getInstance().onCardFliped(this.m_nIdx, this.m_sResName);
        if (ret == RESULT.FINISH){
            console.info("dispatch finish!");
            this.dispatchEventWith("finish", true);
        }
        else if(ret == RESULT.BINGO){
            console.info("dispatch bingo!");
            this.dispatchEventWith("bingo", true);
        }
        else if (ret == RESULT.WRONG){
            console.info("dispatch wrong!");
            this.dispatchEventWith("wrong", true);
        }
        else if (ret == RESULT.FIRST){
            console.info("dispatch first!");
            this.dispatchEventWith("first", true);
        }
        
	}
	
	public init():void{
	    
	}
}
