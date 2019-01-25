import { Res } from "./Res";
import { Player } from "../base/Player";
import { CallPet } from "../Effect/CallPet";
import { PetConfig } from "../base/Pet";
import { EffectConfig } from "../base/Effect";
import { RagingFire } from "../Effect/RagingFire";
import { Point } from "../base/Point";
import { Actor } from "../base/Actor";
import { FierceWind } from "../Effect/FierceWind";
import { PursueSun } from "../Effect/PursueSun";
import { Hailstorm } from "../Effect/Hailstorm";
import { MeteorSwarm } from "../Effect/MeteorSwarm";
import { SkyFire } from "../Effect/SkyFire";
import { Cure } from "../Effect/Cure";
import { Hemophagy } from "../Effect/Hemophagy";

export interface SkillBookConfig {
    name:string;
    blood:number;///气血增加
    magic:number;///魔法增加
    consume_magic:number;///消耗魔法
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
    private _over_time:number = Date.now();//cd过期时间
    private _cd:number = null;

    private _pot:Point = null;
    private _dir:number = null;
    private _target:Actor = null;

    constructor(config:SkillBookConfig) {
        super(config.name,Res.SKILL_BOOK_TYPE)
        this._config = config;
        this._cd = config.cd;
    }
    
    /////使用物品
    public use(player:Player):Boolean {
        let index:number = player.find_package_obj(this);
        if (!index) return false;
        if (player.magic < this._config.consume_magic) return false;
        if (this._over_time > Date.now()) return false;
        if (this._config.effect_name != "") {
            let effect_name:string = this._config.effect_name;
            if (effect_name == "CallPet") {
                if (player.arms.get_arms_type() != 'stick') return false;
                if (player.has_type_pet(this._config.pet_config.name)) return false;
                let effect:CallPet = new CallPet(this._config.pet_config,player);
                player.pushEffect(effect);
            }else if (effect_name == "RagingFire") {
                if (player.arms.get_arms_type() != 'knife') return false;
                if (!this._target) return false;
                let effect:RagingFire = new RagingFire(this._config.effect_config,player,this._target);
                player.pushEffect(effect);
            }else if (effect_name == "FierceWind") {
                if (player.arms.get_arms_type() != 'knife') return false;
                if (!this._target) return false;
                let effect:FierceWind = new FierceWind(this._config.effect_config,player,this._target);
                player.pushEffect(effect);
            }else if (effect_name == "PursueSun") {
                if (player.arms.get_arms_type() != 'knife') return false;
                if (!this._pot || !this._dir || !this._target) return false;
                let effect:PursueSun = new PursueSun(this._config.effect_config,player,this._target,this._dir);
                player.pushEffect(effect);
            }else if (effect_name == "Hailstorm") {
                if (player.arms.get_arms_type() != 'staff') return false;
                if (!this._pot || !this._dir || !this._target) return false;
                let effect:Hailstorm = new Hailstorm(this._config.effect_config,player,this._target,this._pot);
                player.pushEffect(effect);
            }else if (effect_name == "MeteorSwarm") {
                if (player.arms.get_arms_type() != 'staff') return false;
                if (!this._pot || !this._dir || !this._target) return false;
                let effect:MeteorSwarm = new MeteorSwarm(this._config.effect_config,player,this._target,this._pot);
                player.pushEffect(effect);
            }else if (effect_name == "SkyFire") {
                if (player.arms.get_arms_type() != 'staff') return false;
                if (!this._target) return false;
                let effect:SkyFire = new SkyFire(this._config.effect_config,player,this._target);
                player.pushEffect(effect);
            }else if (effect_name == "Cure") {
                if (player.arms.get_arms_type() != 'stick') return false;
                let effect:Cure = new Cure(this._config.effect_config,player);
                player.pushEffect(effect);
            }else if (effect_name == "Hemophagy") {
                if (player.arms.get_arms_type() != 'stick') return false;
                if (!this._target) return false;
                let effect:Hemophagy = new Hemophagy(this._config.effect_config,player,this._target);
                player.pushEffect(effect);
            }
        }
        player.blood += this._config.blood;
        player.magic += this._config.magic;
        player.magic -= this._config.consume_magic;
        this._over_time = Date.now() + this._cd;
        return true;
    }
    ////技能书的使用应该使用这个函数
    public uuse(active:Player,target:Actor,pot:Point):Boolean {
        this.set_pot(pot,active);
        this._target = target;
        return this.use(active);
    }
    /*
       4  5  6
       3 dir 7
       2  1  8
    */
    private set_pot(pot:Point,active:Player):void {
        this._pot = pot;
        let pot2:Point = active.point;
        let x:number = pot.x - pot2.x;
        let y:number = pot.y - pot2.y;
        let l:number = Math.sqrt(x*x + y*y);
        function change (r:number){
            return r/Math.PI*180;
        }
        if (x >= 0 && y >= 0) {
            let a:number = Math.acos(x/l);
            a = change(a);
            if (a <= 15) this._dir = 7;
            else if (a > 22.5 && a < 67.5) this._dir = 6;
            else this._dir = 5;
        }else if (x <= 0 && y >= 0) {
            let a:number = Math.acos(-x/l);
            a = change(a);
            if (a <= 15) this._dir = 3;
            else if (a > 22.5 && a < 67.5) this._dir = 4;
            else this._dir = 5;
        }else if (x <= 0 && y <= 0) {
            let a:number = Math.acos(-x/l);
            a = change(a);
            if (a <= 15) this._dir = 3;
            else if (a > 22.5 && a < 67.5) this._dir = 2;
            else this._dir = 1;
        }else if (x >= 0 && y <= 0) {
            let a:number = Math.acos(x/l);
            a = change(a);
            if (a <= 15) this._dir = 7;
            else if (a > 22.5 && a < 67.5) this._dir = 8;
            else this._dir = 1;
        }
    }
    /////
    public get_config():{} {
        return this._config;
    }
}