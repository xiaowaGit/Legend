import { Res } from "./Res";
import { Player } from "../base/Player";
import { Callkylin } from "../Effect/Callkylin";
import { PetConfig } from "../base/Pet";
import { EffectConfig } from "../base/Effect";

export interface SkillBookConfig {
    name:string;
    blood:number;///气血增加
    magic:number;///魔法增加
    cd:number;//CD秒数
    effect_name:string;////产生effect的名字，没有为空串
    explain:string;////effect说明，没有就是空串
    pet_config?:PetConfig;////如果是召唤宠物有此配置
    effect_config?:EffectConfig;////effect的配置
}
/*
    药品类（只产生一次Effect的物品）
*/
export class SkillBook extends Res {

    private _config:SkillBookConfig = null;
    private _over_time:number = Date.now();
    private _cd:number = null;

    constructor(config:SkillBookConfig) {
        super(config.name,Res.SKILL_BOOK_TYPE)
        this._config = config;
        this._cd = config.cd;
    }
    
    /////使用物品
    public use(player:Player):Boolean {
        let index:number = player.find_package_obj(this);
        if (!index) return false;
        if (this._over_time > Date.now()) return false;
        if (this._config.effect_name != "") {
            let effect_name:string = this._config.effect_name;
            if (effect_name == "Callkylin") {
                if (player.has_type_pet("麒麟")) return false;
                let effect:Callkylin = new Callkylin(player);
                player.pushEffect(effect);
            }
        }
        player.blood += this._config.blood;
        player.magic += this._config.magic;
        this._over_time = Date.now() + this._cd;
        return true;
    }
    /////
    public get_config():{} {
        return this._config;
    }
}