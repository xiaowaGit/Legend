import { Actor } from "./Actor";
import { PActor } from "./PActor";
import { Point } from "./Point";
import { get_l } from "../../../util/tool";
import { PetConfig } from "./Pet";
import { MainScene } from "../drive/MainScene";
import { get_map_width, get_map_height } from "../../../util/mapData";

/*
    怪物类
*/
export class Monster extends Actor {

    private static MONSTER_INDEX:number = 1;

    private _config:PetConfig;
    private _attack_target:Actor;

    constructor(config:PetConfig,scene:MainScene) {
        let pactor:PActor = {prev:null,next:null,player:null};
        let name:string = config.name+'('+Monster.MONSTER_INDEX+')';
        Monster.MONSTER_INDEX ++;
        super(name,get_map_width(),get_map_height(),scene,pactor);
        pactor.player = this;
        this.move_to(this.point,false);
        this._config = config;
        ////属性初始化
        this.blood_limit = config.blood_limit;
        this.magic_limit = config.magic_limit;
        this.blood = config.blood;
        this.magic = config.magic;
        this.physics_attack = config.physics_attack;
        this.magic_attack = config.magic_attack;
        this.physics_defense = config.physics_defense;
        this.magic_defense = config.magic_defense;
    }
    /////获得角色信息
    public get_info():{} {
        let player = {name:this.name,blood:this.blood,blood_limit:this.blood_limit,
        magic:this.magic,magic_limit:this.magic_limit,physics_attack:this.physics_attack,
        magic_attack:this.magic_attack,physics_defense:this.physics_defense,
        magic_defense:this.magic_defense,point:this.point,speed:this.speed,is_die:this.is_die};
        return {player:player,config_name:this.get_config_name()};
    }
    ////获得攻击CD时间
    public get_cd_time():number {
        return this._config.cd_time;
    }
    /////获得存活时间
    public get_life_time():number {
        return this._config.life_time;
    }

    /////获得角色代码
    public get_config_name():string {
        return this._config.name;
    }

    /////设置攻击目标
    public set_attack_target(target:Actor):void {
        this._attack_target = target;
    }
    ////获得攻击目标
    public get_attack_target():Actor {
        return this._attack_target;
    }
    /////获得和目标的距离
    public get_target_l():number {
        if (!this._attack_target) return null;
        let target_point:Point = this._attack_target.point;
        return get_l(this.point,target_point);
    }
    ////向地图的所有玩家推送消息
    public notice_all_player(onType:string,body:Object):void {
        this._scene.notice_all_player(onType,body);
    }

    /// 向某个玩家通知消息
    public notice_one_player(onType:string,body:Object):void {
        this._scene.notice_one_player(onType,body,this.name);
    }
}