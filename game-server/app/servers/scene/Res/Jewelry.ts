import { EquipmentRes } from "./EquipmentRes";
import { Player } from "../base/Player";

export interface JewelryConfig {
    name:string;
    blood_limit:number;//气血增量
    magic_limit:number;//魔法增量
    physics_attack:number;//物理攻击增加
    magic_attack:number;//魔法攻击增加
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    speed:number;//速度增加
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}
/*
    首饰
*/

export class Jewelry extends EquipmentRes {
    
    private _config:JewelryConfig = null;

    constructor(config:JewelryConfig){
        super(config.name,EquipmentRes.JEWELRY_TYPE);
        this._config = config;
    }

    public use(player:Player):Boolean {
        if (player.physics_attack < this._config.has_physics_attack || player.magic_attack < this._config.has_magic_attack) return false;
        if(player.un_jewelry()) {
            let index = player.find_package_obj(this);
            if (index === null) {
                return false;
            }else{
                player.out_package_index(index);
                player.blood_limit += this._config.blood_limit;
                player.magic_limit += this._config.magic_limit;
                player.physics_attack += this._config.physics_attack;
                player.magic_attack += this._config.magic_attack;
                player.speed += this._config.speed;
                player.physics_defense += this._config.physics_defense;
                player.magic_defense += this._config.magic_defense;
                player.jewelry = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.jewelry != this) return;
        player.blood_limit -= this._config.blood_limit;
        player.magic_limit -= this._config.magic_limit;
        player.physics_attack -= this._config.physics_attack;
        player.magic_attack -= this._config.magic_attack;
        player.speed -= this._config.speed;
        player.physics_defense -= this._config.physics_defense;
        player.magic_defense -= this._config.magic_defense;
    }
    
    public get_config():{} {
        return this._config;
    }
}