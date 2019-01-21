import { EquipmentRes } from "./EquipmentRes";
import { Player } from "../base/Player";


export interface ClothesConfig {
    name:string;
    blood:number;//气血增量
    magic:number;//魔法增量
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
                player.blood += this._config.blood;
                player.magic += this._config.magic;
                player.clothes = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.clothes != this) return;
        player.blood -= this._config.blood;
        player.magic -= this._config.magic;
    }
}