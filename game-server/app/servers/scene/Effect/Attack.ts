import { Effect } from "../base/Effect";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";

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
        let physics_attack:number = this._active.physics_attack;
        let physics_defense:number = this._target.physics_defense;
        let hurt:number = Attack.getHurt(physics_attack,physics_defense);
        this._target.blood -= hurt;
    }
    
    is_run(): Boolean {
        return false;
    }
    kill(): void {
        return;////此效果不能被kill,只能自己消失
    }


}