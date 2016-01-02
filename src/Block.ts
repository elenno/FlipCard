/**
 *
 * @author 
 *
 */
class Block extends egret.Bitmap{
    private m_nState: number;
    private m_nIdx: number;
    private m_sResName: string;
    
    public constructor(resName:string) {
        super();
        this.m_sResName = resName;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
	}
	
	public onTouchTap(evt:egret.Event){
        this.texture = RES.getRes(this.m_sResName);
        this.touchEnabled = false;
        var ret = DataMgr.onBlockTouched(this.m_nIdx);
        if (ret == RESULT.FINISH){
            this.dispatchEventWith("finish");
        }
        else if(ret == RESULT.BINGO){
            this.dispatchEventWith("bingo");
        }
        else if (ret == RESULT.WRONG){
            this.dispatchEventWith("wrong");
        }
        else if (ret == RESULT.FIRST){
            this.dispatchEventWith("first");
        }
        
	}
	
	public init():void{
	    
	}
}
