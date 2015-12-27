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
	
	public onTouchTap(){
        this.texture = RES.getRes(this.m_sResName);
        this.touchEnabled = false;
	}
	
	public init():void{
	    
	}
}
