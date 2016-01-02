/**
 *
 * @author 
 *
 */
enum RESULT {
    BINGO = 0,
    FIRST = 1,
    WRONG = 2,
    FINISH = 3
}
class DataMgr {
       
    public m_nGameStatus: number;
    public m_Timer: egret.Timer;
    public static _firstIdx: number = -1;
    public static _secondIdx: number = -1;
    public static _lastIdx: number = -1;
    public static _idArray: number[];
	public constructor() {
	    
	}
	
	public static init():void {
        DataMgr._idArray = new Array<number>(20);
        for(var i = 0;i < 20; i++){
            DataMgr._idArray[i] = 0;
        }
	}
	
	public static isGameFinish(): Boolean{
        for(var i = 0, len = DataMgr._idArray.length; i < len; i++){
            if(DataMgr._idArray[i] != -1)
                return false;
        }
        return true;
	}
	
	public static onBlockTouched(idx):number{
    	  if(DataMgr._lastIdx == -1) {
            //first one 
            DataMgr._lastIdx = idx;
            return RESULT.FIRST;
        }
	    else {
            DataMgr._firstIdx = DataMgr._lastIdx;
            DataMgr._secondIdx = idx;
            DataMgr._lastIdx = -1; 
            if(DataMgr._idArray[DataMgr._firstIdx] == DataMgr._idArray[DataMgr._secondIdx]) {
                DataMgr._idArray[DataMgr._firstIdx] = -1;
                DataMgr._idArray[DataMgr._secondIdx] = -1;
                //check is finish
                if(DataMgr.isGameFinish()) {
                    return RESULT.FINISH;
                }
                return RESULT.BINGO;
            }
            else{
                //wrong
                return RESULT.WRONG;
            } 
        }
        
        return 0;
	}
}
