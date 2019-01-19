import { Effect } from "../base/Effect";
import { Point } from "../base/Point";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";
import A_star_pathfinder from "../../../util/pathFinding";

/*
    Move 移动效果
*/

export class Move implements Effect {

    private _to:Point = null;
    private _active:Target = null;
    private _map:number[][] = null;
    private _player:Actor = null;
    private _o:Point = null;
    private _pathFind: A_star_pathfinder;
    private _is_run:Boolean = false;
    private _path:Point[];
    private _tick:number = 0;
    private _speed:number;
    private _ppath:number = 0;
    private _is_end: boolean;

    constructor(to:Point,map:number[][],active:Target) {
        this._to = to;
        this._active = active;
        this._map = map;
        this._player = active.getTarget()[0];
        this._o = this._player.point;
        
        let pathFind = new A_star_pathfinder();
        this._pathFind = pathFind;
        this._is_end = false;
    }

    getName():string {//效果名字 
        return 'Move';
    }
    getActive():Target {//效果的施放者
        return this._active;
    }
    getTarget():Target {//效果的目标对象
        return this._active;
    }
    run():void {//运行效果
        if(this._is_end) return;
        if(!this.is_run()) {
            this._is_run = true;
            let self = this;
            self._pathFind.init(this._map);
            let path = self._pathFind.findPath(self._o.x,self._o.y,self._to.x,self._to.y);
            self._path = path;
            let speed = this._player.getTickSpeed();
            this._speed = speed;
            this._tick = 0;
        }else{
            this._tick++;
            if(this._tick >= this._speed) {
                this._tick = 0;
                this._ppath++;
                if(this._ppath >= this._path.length){
                    this._is_end = true;
                    this._is_run = false;
                    return
                }else{
                    let pot:Point = this._path[this._ppath];
                    this._player.move_to(pot);
                }
            }
        }
    }
    is_run():Boolean {//效果是否运行中
        return this._is_run;
    }
    kill():void {//强制kill运行中的效果
        this._is_end = true;
        this._is_run = false;
    }
}