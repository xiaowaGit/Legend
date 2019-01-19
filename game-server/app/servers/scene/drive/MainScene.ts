
/*
    场景驱动
*/
export class MainScene {

    private static _instance:MainScene = null;//场景单例

    public static getInstance():MainScene {
        if(!this._instance) this._instance = new MainScene();
        return this._instance;
    }

    public name:string = null;
    private _tick_timer:NodeJS.Timer = null;

    constructor() {
        this.name = "绝地求生";
        this._tick_timer = setInterval(this.tick.bind(this),1000/60); // 游戏世界刷新时间为1/60秒每帧
    }

    private tick():void {
        
    }

    public Destructor():void {// 程序退出，清理场景
        clearInterval(this._tick_timer);
    }
}