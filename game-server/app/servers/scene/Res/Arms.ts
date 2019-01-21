import { EquipmentRes } from "./EquipmentRes";
import { Player } from "../base/Player";

export interface ArmsConfig {
    name:string;
    physics_attack:number;//物理攻击增量
    magic_attack:number;//魔法攻击增量
    has_blood:number;//需要气血量
    has_magic:number;//需要魔法量
    arms_type:'knife'|'staff'|'stick';//武器类别(刀，法杖，棍)
}
/*
    武器类
*/
export class Arms extends EquipmentRes {

    private _config:ArmsConfig = null;

    constructor(config:ArmsConfig){
        super(config.name,EquipmentRes.ARMS_TYPE);
        this._config = config;
    }

    public use(player:Player):Boolean {
        if (player.blood_limit < this._config.has_blood || player.magic_limit < this._config.has_magic) return false;
        if(player.un_arms()) {
            let index = player.find_package_obj(this);
            if (!index) {
                return false;
            }else{
                player.out_package_index(index);
                player.physics_attack += this._config.physics_attack;
                player.magic_attack += this._config.magic_attack;
                player.arms = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.arms != this) return;
        player.physics_attack -= this._config.physics_attack;
        player.magic_attack -= this._config.magic_attack;
    }

    public get_config():{} {
        return this._config;
    }
}