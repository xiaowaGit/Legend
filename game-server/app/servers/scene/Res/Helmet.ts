import { EquipmentRes } from "./EquipmentRes";
import { Player } from "../base/Player";

export interface HelmetConfig {
    name:string;
    blood:number;//气血增量
    magic:number;//魔法增量
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}
/*
    头盔
*/
export class Helmet extends EquipmentRes {
    
    private _config:HelmetConfig = null;

    constructor(config:HelmetConfig){
        super(config.name,EquipmentRes.HELMET_TYPE);
        this._config = config;
    }

    public use(player:Player):Boolean {
        if (player.physics_attack < this._config.has_physics_attack || player.magic_attack < this._config.has_magic_attack) return false;
        if(player.un_helmet()) {
            let index = player.find_package_obj(this);
            if (!index) {
                return false;
            }else{
                player.out_package_index(index);
                player.blood += this._config.blood;
                player.magic += this._config.magic;
                player.physics_defense += this._config.physics_defense;
                player.magic_defense += this._config.magic_defense;
                player.helmet = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.helmet != this) return;
        player.blood -= this._config.blood;
        player.magic -= this._config.magic;
        player.physics_defense -= this._config.physics_defense;
        player.magic_defense -= this._config.magic_defense;
    }
    
    public get_config():{} {
        return this._config;
    }
}