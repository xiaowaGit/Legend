import {Point} from './Point'
import { Target } from './Target';
import { MainScene, PTerm } from '../drive/MainScene';
import { PActor } from './PActor';
/*
    角色基类
*/
export abstract class Actor extends Target {

    public name:string = null;//玩家姓名
    private _blood: number = 0;//气血
    private _blood_limit:number = 1000;//气血上限
    private _magic: number = 0;//魔法
    private _magic_limit:number = 1000;//魔法上限
    private _physics_attack: number = 100;//物理攻击
    private _magic_attack: number = 100;//魔法攻击
    private _physics_defense: number = 150;//物理防御
    private _magic_defense: number = 150;//魔法防御
    public point:Point = null;
    private _speed:number = 500;//玩家移动速度
    public is_die:boolean = false;
    private _die_time:number = null;

    public pass_tick:number = 0; //行走到下一点已经经过的帧数
    public attack_cd:number = 1; //攻击cd 秒数
    public attack_over_time:number = Date.now();

    protected _scene:MainScene = null;
    protected _pactor: PActor = null;

    constructor(name:string,map_w:number,map_h:number,scene:MainScene,pactor:PActor) {
        super();
        this.name = name;
        this.blood = 1000;
        this.magic = 1000;
        this._scene = scene;
        this._pactor = pactor;
        this.point = this.random_pot(map_w,map_h);//人物初始化在随机位置
        this.point.x = Math.floor(this.point.x);
        this.point.y = Math.floor(this.point.y);
    }

    private random_pot(map_w:number,map_h:number):Point {
        while(true) {
            let pot:Point = {x : Math.floor(map_w * Math.random()),y : Math.floor(map_h * Math.random()) };
            if (this._scene.grid_map[pot.x][pot.y] == 1) return pot;
        }
    }
    
    public move_to(pot:Point,is_out:boolean = true):void {
        let term_map:PTerm[][] = this._scene.term_map;
        if(is_out)this.out();///先跳出地图
        let term:PTerm = term_map[pot.x][pot.y];
        if (term.player) term.player.prev = this._pactor;
        this._pactor.next = term.player;
        this._pactor.prev = null;
        term.player = this._pactor;
        this.point = pot;
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
    /////获得死亡时间
    public get_die_time():number {
        return this._die_time;
    }
    ///// 移动速度
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
    /////气血
    public get blood(): number {
        return this._blood;
    }
    public set blood(value: number) {
        if(value > this._blood_limit) this._blood = this._blood_limit;
        else if (value < 0) {
            this._blood = 0;
            this.is_die = true;
            this._die_time = Date.now();
            this.notice_all_player("onDie",this.get_info());
        } 
        else this._blood = value;
    }
    /////气血上限
    public get blood_limit():number {
        return this._blood_limit;
    }

    public set blood_limit(value:number) {
        if (value < 1000) this._blood_limit = 1000;
        else this._blood_limit = value;
    }
    //////魔法
    public get magic(): number {
        return this._magic;
    }
    public set magic(value: number) {
        if(value > this._magic_limit) this._magic = this._magic_limit;
        else if (value < 0) this._magic = 0;
        else this._magic = value;
    }
    ///////魔法上限
    public get magic_limit():number {
        return this._magic_limit;
    }

    public set magic_limit(value:number) {
        if (value < 1000) this._magic_limit = 1000;
        else this._magic_limit = value;
    }
    //////物理攻击
    public get physics_attack(): number {
        return this._physics_attack;
    }
    public set physics_attack(value: number) {
        if (value > 5000) this._physics_attack = 5000;
        else if (value < 100) this._physics_attack = 100;
        else this._physics_attack = value;
    }
    //////魔法攻击
    public get magic_attack(): number {
        return this._magic_attack;
    }
    public set magic_attack(value: number) {
        if (value > 5000) this._magic_attack = 5000;
        else if (value < 100) this._magic_attack = 100;
        else this._magic_attack = value;
    }
    /////物理防御
    public get physics_defense(): number {
        return this._physics_defense;
    }
    public set physics_defense(value: number) {
        if (value > 2000) this._physics_defense = 2000;
        else if (value < 50) this._physics_defense = 50;
        else this._physics_defense = value;
    }
    /////魔法防御
    public get magic_defense(): number {
        return this._magic_defense;
    }
    public set magic_defense(value: number) {
        if (value > 2000) this._magic_defense = 2000;
        else if (value < 50) this._magic_defense = 50;
        else this._magic_defense = value;
    }
    ///获得移动一格子的间隔帧
    public getTickSpeed():number {
        return Math.ceil((1000 - this.speed) / 50);
    }

    public getTarget():Actor[] {
        return [this]
    }

    public get_scene():MainScene {
        return this._scene;
    }
    
    abstract get_info():{};
    abstract get_config_name():string;
    abstract notice_all_player(onType:string,body:Object):void;
    abstract notice_one_player(onType:string,body:Object):void;
}