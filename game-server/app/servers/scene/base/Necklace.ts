import { EquipmentRes } from "./EquipmentRes";
import { Player } from "./Player";

export interface NecklaceConfig {
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
    项链
*/

export class Necklace extends EquipmentRes {
    
    private _config:NecklaceConfig = null;

    constructor(config:NecklaceConfig){
        super(config.name,EquipmentRes.NECKLACE_TYPE);
        this._config = config;
    }

    public use(player:Player):Boolean {
        if (player.physics_attack < this._config.has_physics_attack || player.magic_attack < this._config.has_magic_attack) return false;
        if(player.un_necklace()) {
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
                player.necklace = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.necklace != this) return;
        player.blood -= this._config.blood;
        player.magic -= this._config.magic;
        player.physics_attack -= this._config.physics_attack;
        player.magic_attack -= this._config.magic_attack;
        player.speed -= this._config.speed;
    }
}