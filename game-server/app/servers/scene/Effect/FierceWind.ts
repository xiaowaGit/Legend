import { Effect, EffectConfig } from "../base/Effect";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";
import { Point } from "../base/Point";
import { get_l } from "../../../util/tool";

/*
    狂风斩
*/

export class FierceWind implements Effect {
    
    private _config:EffectConfig = null;
    private _active:Actor = null;
    private _target:Target = null;

    constructor(config:EffectConfig,active:Actor,target:Target) {
        this._config = config;
        this._active = active;
        this._target = target;
    }

    getName(): string {
        return 'FierceWind';
    }
    getActive(): Target {
        return this._active;
    }
    getTarget(): Target {
        return this._target;
    }
    run(): void {
        let active:Actor = this._active;
        let targets:Actor[] = this._target.getTarget();
        targets.forEach(element => {
            let pot1:Point = active.point;
            let pot2:Point = element.point;
            if (get_l(pot1,pot2) < 3 && element != active) {
                let physics_attack:number = active.physics_attack;
                let physics_defense:number = element.physics_defense;
                let hurt:number = FierceWind.getHurt(physics_attack,physics_defense);
                element.blood -= hurt;
            }
        });
    }
    
    public static getHurt(physics_attack: number, physics_defense: number): number {
        let hurt:number = 1.5*physics_attack - physics_defense;
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
        return ;
    }

}