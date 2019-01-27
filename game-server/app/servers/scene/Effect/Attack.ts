import { Effect } from "../base/Effect";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";
import { Point } from "../base/Point";
import { get_l } from "../../../util/tool";

/*
    普通攻击
*/

export class Attack implements Effect {

    private _active:Actor = null;
    private _target:Actor = null;

    constructor(active:Actor,target:Actor) {
        this._active = active;
        this._target = target;
    }

    getName(): string {
        return 'Attack';
    }
    getActive(): Target {
        return this._active;
    }
    getTarget(): Target {
        return this._target;
    }

    public static getHurt(physics_attack:number,physics_defense:number):number {
        let hurt:number = physics_attack - physics_defense;
        hurt = hurt <= 0 ? 1 : hurt;
        hurt = Math.ceil(Math.random()*hurt);
        hurt = Math.ceil(Math.random()*hurt);
        hurt = Math.ceil(Math.random()*hurt);
        return hurt;
    }

    run(): void {
        let pot1:Point = this._active.point;
        let pot2:Point = this._target.point;
        let l:number = get_l(pot1,pot2);
        if (l >= 2)return; ///距离大于2攻击无效
        let physics_attack:number = this._active.physics_attack;
        let physics_defense:number = this._target.physics_defense;
        let hurt:number = Attack.getHurt(physics_attack,physics_defense);
        this._target.blood -= hurt;
        this._active.killEffectByName('Move');
        this._active.notice_all_player('onAttack',{active:this._active.name,target:this._target.name});
    }
    
    is_run(): Boolean {
        return false;
    }
    kill(): void {
        return;////此效果不能被kill,只能自己消失
    }


}