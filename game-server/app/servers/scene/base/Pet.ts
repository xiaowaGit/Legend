import { Actor } from "./Actor";
import { Player } from "./Player";
import { PActor } from "./PActor";
import { Point } from "./Point";
import { get_l } from "../../../util/tool";


export interface PetConfig {
    name:string;
    blood:number;//气血量
    magic:number;//魔法量
    blood_limit:number;//气血上限
    magic_limit:number;//魔法上限
    physics_attack:number;//物理攻击
    magic_attack:number;//魔法攻击
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    life_time:number;//存活秒数
    cd_time:number;//攻击CD时间
}
/*
    宠物类
*/
export class Pet extends Actor {

    private _config:PetConfig;
    private _player:Player;
    private _attack_target:Actor;

    constructor(config:PetConfig,player:Player) {
        let pactor:PActor = {prev:null,next:null,player:null};
        let player_name:string = player.name;
        let name:string = player_name+"的"+config.name;
        super(name,100,100,player.get_scene(),pactor);
        pactor.player = this;
        this.point = player.point;
        this.move_to(this.point);
        this._config = config;
        this._player = player;
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
    /////获得宠物的主人
    public get_player():Player {
        return this._player;
    }
    /////获得和目标的距离
    public get_target_l():number {
        if (!this._attack_target) return null;
        let target_point:Point = this._attack_target.point;
        return get_l(this.point,target_point);
    }
    /////获得和主人的距离
    public get_player_l():number {
        let player_point:Point = this._player.point;
        return get_l(this.point,player_point);
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