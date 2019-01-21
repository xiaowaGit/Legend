import { EquipmentRes } from "./EquipmentRes";
import { Player } from "../base/Player";


export interface ShoesConfig {
    name:string;
    blood:number;//气血增量
    magic:number;//魔法增量
    speed:number;//速度增量
    has_physics_attack:number;//需要物理攻击
    has_magic_attack:number;//需要魔法攻击
}
/*
    鞋子
*/

export class Shoes extends EquipmentRes {
    
    private _config:ShoesConfig = null;

    constructor(config:ShoesConfig){
        super(config.name,EquipmentRes.SHOES_TYPE);
        this._config = config;
    }

    public use(player:Player):Boolean {
        if (player.physics_attack < this._config.has_physics_attack || player.magic_attack < this._config.has_magic_attack) return false;
        if(player.un_shoes()) {
            let index = player.find_package_obj(this);
            if (!index) {
                return false;
            }else{
                player.out_package_index(index);
                player.blood += this._config.blood;
                player.magic += this._config.magic;
                player.speed += this._config.speed;
                player.shoes = this;
                return true;
            }
        }else {
            return false;
        }
    }

    public unuse(player:Player):void {
        if (player.shoes != this) return;
        player.blood -= this._config.blood;
        player.magic -= this._config.magic;
        player.speed -= this._config.speed;
    }
    
    public get_config():{} {
        return this._config;
    }
}