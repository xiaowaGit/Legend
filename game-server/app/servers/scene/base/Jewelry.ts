import { EquipmentRes } from "./EquipmentRes";
import { Player } from "./Player";

export interface JewelrytConfig {
    name:string;
    blood:number;//气血增量
    magic:number;//魔法增量
    physics_attack:number;//物理攻击增加
    magic_attack:number;//魔法攻击增加
    speed:number;//速度增加
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}
/*
    首饰
*/

export class Jewelry extends EquipmentRes {
    
    private _config:JewelrytConfig = null;

    constructor(config:JewelrytConfig){
        super(config.name,EquipmentRes.JEWELRY_TYPE);
        this._config = config;
    }

    public use(player:Player):Boolean {
        if (player.physics_attack < this._config.has_physics_attack || player.magic_attack < this._config.has_magic_attack) return false;
        if(player.un_jewelry()) {
            let index = player.find_package_obj(this);
            if (!index) {
                return false;
            }else{
                player.out_package_index(index);
                player.blood += this._config.blood;
                player.magic += this._config.magic;
                player.physics_attack += this._config.physics_attack;
                player.magic_attack += this._config.magic_attack;
                player.speed += this._config.speed;
                player.jewelry = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.jewelry != this) return;
        player.blood -= this._config.blood;
        player.magic -= this._config.magic;
        player.physics_attack -= this._config.physics_attack;
        player.magic_attack -= this._config.magic_attack;
        player.speed -= this._config.speed;
    }
}