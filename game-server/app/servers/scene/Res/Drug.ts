import { Res } from "./Res";
import { Player } from "../base/Player";
import { PetConfig } from "../base/Pet";
import { CallPet } from "../Effect/CallPet";
import { EffectConfig } from "../base/Effect";

export interface DrugConfig {
    name:string;
    blood:number;///气血增加
    magic:number;///魔法增加
    effect_name:string;////产生effect的名字，没有为空串
    explain:string;////effect说明，没有就是空串
    pet_config?:PetConfig;////如果是召唤宠物有此配置
    effect_config?:EffectConfig;////effect的配置
}
/*
    药品类（只产生一次Effect的物品）
*/
export class Drug extends Res {

    private _config:DrugConfig = null;

    constructor(config:DrugConfig) {
        super(config.name,Res.DRUG_TYPE)
        this._config = config;
    }
    
    /////使用物品
    public use(player:Player):Boolean {
        let index:number = player.find_package_obj(this);
        if (!index) return false;
        if (this._config.effect_name != "") {
            let effect_name:string = this._config.effect_name;
            if (effect_name == "CallPet") {
                if (player.has_type_pet(this._config.pet_config.name)) return false;
                let effect:CallPet = new CallPet(this._config.pet_config,player);
                player.pushEffect(effect);
            }
        }
        player.blood += this._config.blood;
        player.magic += this._config.magic;
        player.out_package_index(index);
        return true;
    }
    /////
    public get_config():{} {
        return this._config;
    }
}