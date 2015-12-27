/**
 *
 * @author
 *
 */
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(resName) {
        _super.call(this);
        this.m_sResName = resName;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }
    var d = __define,c=Block;p=c.prototype;
    p.onTouchTap = function () {
        this.texture = RES.getRes(this.m_sResName);
        this.touchEnabled = false;
    };
    p.init = function () {
    };
    return Block;
})(egret.Bitmap);
egret.registerClass(Block,"Block");
