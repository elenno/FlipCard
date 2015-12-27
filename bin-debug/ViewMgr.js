/**
 *
 * @author
 *
 */
var ViewMgr = (function (_super) {
    __extends(ViewMgr, _super);
    function ViewMgr() {
        _super.call(this);
        this.m_DataMgr = new DataMgr();
    }
    var d = __define,c=ViewMgr;p=c.prototype;
    p.createStartScene = function () {
        //load background and start button
        this.m_Background = new egret.Bitmap();
        this.m_Background.texture = RES.getRes("bgImage");
        this.addChild(this.m_Background);
        this.m_StartButton = new egret.TextField();
        this.m_StartButton.text = "开始游戏";
        this.m_StartButton.touchEnabled = true;
        this.m_StartButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
        this.addChild(this.m_StartButton);
    };
    p.onStartGame = function () {
        this.removeChild(this.m_StartButton);
        this.createGameScene();
    };
    p.createGameScene = function () {
        //load pictures
        this.m_BlockArray = new Array();
        for (var i = 0; i < 20; i++) {
            this.m_BlockArray[i] = new Block("pic" + (i % 10));
            this.m_BlockArray[i].texture = RES.getRes("pic");
            this.m_BlockArray[i].width = 45;
            this.m_BlockArray[i].height = 70;
            this.m_BlockArray[i].x = (i % 10) * this.m_BlockArray[i].width;
            if (i < 10)
                this.m_BlockArray[i].y = 0;
            else
                this.m_BlockArray[i].y = this.m_BlockArray[i].height;
            this.addChild(this.m_BlockArray[i]);
            this.m_BlockArray[i].init();
        }
    };
    return ViewMgr;
})(egret.DisplayObjectContainer);
egret.registerClass(ViewMgr,"ViewMgr");
