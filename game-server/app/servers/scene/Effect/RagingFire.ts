import { Effect, EffectConfig } from "../base/Effect";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";
import { Point } from "../base/Point";
import { get_l } from "../../../util/tool";


/*
    烈火
*/

export class RagingFire implements Effect {

    private _config:EffectConfig = null;
    private _active:Actor = null;
    private _target:Actor = null;

    constructor(config:EffectConfig,active:Actor,target:Actor) {
        this._config = config;
        this._active = active;
        this._target = target;
    }

    getName(): string {
        return 'RagingFire';
    }
    getActive(): Target {
        return this._active;
    }
    getTarget(): Target {
        return this._target;
    }
    run(): void {
        let pot1:Point = this._active.point;
        let pot2:Point = this._target.point;
        let l:number = get_l(pot1,pot2);
        if (l >= 2)return; ///距离大于2攻击无效
        this._active.killEffectByName('Move');
        this._active.notice_all_player('onRagingFire',
        {active:this._active.name,
        target:this._target.name});
        let physics_attack:number = this._active.physics_attack;
        let physics_defense:number = this._target.physics_defense;
        let hurt:number = RagingFire.getHurt(physics_attack,physics_defense);
        this._target.blood -= hurt;
    }

    public static getHurt(physics_attack: number, physics_defense: number): number {
        let hurt:number = 2*physics_attack - physics_defense;
        hurt = hurt <= 0 ? 1 : hurt;
        hurt = Math.ceil(Math.random()*hurt);
        hurt = Math.ceil(Math.random()*hurt);
        hurt = Math.ceil(Math.random()*hurt);
        return hurt;
    }
    is_run(): Boolean {
        return false;
    }
    kill(): void {
        return ;///此效果不能被kill
    }

}