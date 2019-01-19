import {Effect} from './Effect'
import {Point} from './Point'
import { Target } from './Target';
import { MainScene, PTerm } from '../drive/MainScene';
import { PActor } from './PActor';
/*
    角色基类
*/
export abstract class Actor implements Target {

    public name:string = null;//玩家姓名
    public blood:number = 0;//气血
    public magic:number = 0;//魔法
    public point:Point = null;
    private _speed:number = 500;//玩家移动速度

    private effect_stack:Effect[] = [];//效果栈
    private _scene:MainScene = null;
    private _pactor: PActor = null;

    constructor(name:string,map_w:number,map_h:number,scene:MainScene,pactor:PActor) {
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

    public pushEffect(e:Effect):void {
        this.effect_stack.push(e);
    }
    ///获得效果栈
    public getEffectStack():Effect[] {
        return this.effect_stack;
    }

    public run():void { // 运行角色身上的效果
        for(let i=0;i<this.effect_stack.length;i++) {
            let e:Effect = this.effect_stack[i];
            e.run();
        }
        let del_list:Effect[] = [];
        this.effect_stack.forEach(element => {
            let is_run = element.is_run();
            if (!is_run) del_list.push(element);
        });
        del_list.forEach(element => {
            let index = this.effect_stack.indexOf(element);
            if (index != -1) this.effect_stack.splice(index,1);
        });
    }
    
    public getTarget():Actor[] {
        return [this]
    }
}