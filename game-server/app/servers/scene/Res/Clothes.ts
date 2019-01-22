import { EquipmentRes } from "./EquipmentRes";
import { Player } from "../base/Player";


export interface ClothesConfig {
    name:string;
    blood_limit:number;//气血增量
    magic_limit:number;//魔法增量
    physics_defense:number;//物理防御
    magic_defense:number;//魔法防御
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}
/*
    衣服
*/

export class Clothes extends EquipmentRes {
    
    private _config:ClothesConfig = null;

    constructor(config:ClothesConfig){
        super(config.name,EquipmentRes.CLOTHES_TYPE);
        this._config = config;
    }

    public use(player:Player):Boolean {
        if (player.physics_attack < this._config.has_physics_attack || player.magic_attack < this._config.has_magic_attack) return false;
        if(player.un_clothes()) {
            let index = player.find_package_obj(this);
            if (!index) {
                return false;
            }else{
                player.out_package_index(index);
                player.blood_limit += this._config.blood_limit;
                player.magic_limit += this._config.magic_limit;
                player.physics_defense += this._config.physics_defense;
                player.magic_defense += this._config.magic_defense;
                player.clothes = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.clothes != this) return;
        player.blood_limit -= this._config.blood_limit;
        player.magic_limit -= this._config.magic_limit;
        player.physics_defense -= this._config.physics_defense;
        player.magic_defense -= this._config.magic_defense;
    }
    
    public get_config():{} {
        return this._config;
    }
}