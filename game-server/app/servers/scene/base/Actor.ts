import {Point} from './Point'
import { Target } from './Target';
import { MainScene, PTerm } from '../drive/MainScene';
import { PActor } from './PActor';
/*
    角色基类
*/
export abstract class Actor extends Target {

    public name:string = null;//玩家姓名
    public blood:number = 0;//气血
    public magic:number = 0;//魔法
    public point:Point = null;
    private _speed:number = 500;//玩家移动速度

    protected _scene:MainScene = null;
    protected _pactor: PActor = null;

    constructor(name:string,map_w:number,map_h:number,scene:MainScene,pactor:PActor) {
        super();
        this.name = name;
        this.blood = 1000;
        this.magic = 1000;
        this.point = {x : map_w * Math.random(),y : map_h * Math.random() };//人物初始化在随机位置
        this.point.x = Math.floor(this.point.x);
        this.point.y = Math.floor(this.point.y);
        this._scene = scene;
        this._pactor = pactor;
    }
    
    public move_to(pot:Point):void {
        let term_map:PTerm[][] = this._scene.term_map;
        if (this._pactor.prev) this._pactor.prev.next = this._pactor.next;
        if (this._pactor.next) this._pactor.next.prev = this._pactor.prev;
        let term:PTerm = term_map[pot.x][pot.y];
        term.player.prev = this._pactor;
        this._pactor.next = term.player;
        this._pactor.prev = null;
        term.player = this._pactor;
    }

    public out():void { ///从地图中跳出
        let term_map:PTerm[][] = this._scene.term_map;
        if (this._pactor.prev) this._pactor.prev.next = this._pactor.next;
        if (this._pactor.next) this._pactor.next.prev = this._pactor.prev;
        if (!this._pactor.prev) {
            let term:PTerm = term_map[this.point.x][this.point.y];
            term.player = this._pactor.next;
        }
    }

    public get speed():number {
        return this._speed;
    }

    public set speed(value:number) {
        if(value > 900) {
            this._speed = 900;
        }else if (value < 500) {
            this._speed = 500;
        }else{
            this._speed = value;
        }
    }

    ///获得移动一格子的间隔帧
    public getTickSpeed():number {
        return Math.ceil((1000 - this.speed) / 100);
    }

    public getTarget():Actor[] {
        return [this]
    }
    
    abstract notice_all_player(onType:string,body:Object):void;
    abstract notice_one_player(onType:string,body:Object):void;
}