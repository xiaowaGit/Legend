import { Actor } from "./Actor";
import { Player } from "./Player";
import { PActor } from "./PActor";


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
    }
    
    public get_config_name():string {
        return this._config.name;
    }

    /////设置攻击目标
    public set_attack_target(target:Actor):void {
        this._attack_target = target;
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