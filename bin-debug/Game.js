/**
 *
 * @author
 *
 */
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
        this.m_nColorArray = [0x0033FF, 0x00CC33, 0x990033, 0x9933FF, 0xFFFF33];
    }
    var d = __define,c=Game;p=c.prototype;
    p.game_start = function () {
        this.m_nLastIdx = -1;
        this.draw_board();
        this.draw_mice();
        this.m_bTouchable = true;
    };
    p.draw_board = function () {
        this.m_Board = new egret.Shape();
        this.m_Board.graphics.beginFill(0xFFD39B);
        this.m_Board.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        this.m_Board.graphics.endFill();
        this.addChild(this.m_Board);
        //this.setChildIndex(this.m_Board,0);
    };
    p.draw_mice = function () {
        this.m_Mice = new Array();
        for (var i = 0; i < 10; i++) {
            console.info("color ", i % 5, ":", this.m_nColorArray[i % 5]);
            this.m_Mice.push(new Mice(this, i, this.m_nColorArray[i % 5]));
        }
        for (var i = 0; i < 10; i++) {
            this.m_Mice[i].draw(i * 30 + 50, i * 30 + 50, 10);
            this.addChild(this.m_Mice[i]);
        }
    };
    return Game;
})(egret.DisplayObjectContainer);
egret.registerClass(Game,"Game");
