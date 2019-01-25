import { Effect, EffectConfig } from "../base/Effect";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";
import { Point } from "../base/Point";
import { get_l } from "../../../util/tool";


/*
    冰咆哮
*/

export class Hailstorm implements Effect {
    
    private _config:EffectConfig = null;
    private _active:Actor = null;
    private _target:Target = null;
    private _tpot:Point = null;

    constructor(config:EffectConfig,active:Actor,target:Target,tpot:Point) {
        this._config = config;
        this._active = active;
        this._target = target;
        this._tpot = tpot;
    }

    getName(): string {
        return 'Hailstorm';
    }
    getActive(): Target {
        return this._active;
    }
    getTarget(): Target {
        return this._target;
    }
    run(): void {
        if (get_l(this._active.point,this._tpot) > this._config.attack_l) return;///攻击有效范围
        let active:Actor = this._active;
        let targets:Actor[] = this._target.getTarget();
        targets.forEach(element => {
            let pot1:Point = this._tpot;
            let pot2:Point = element.point;
            if (get_l(pot1,pot2) < 5 && element != active) {
                let magic_attack:number = active.magic_attack;
                let magic_defense:number = element.magic_defense;
                let hurt:number = Hailstorm.getHurt(magic_attack,magic_defense);
                element.blood -= hurt;
            }
        });
    }
    
    public static getHurt(magic_attack: number, magic_defense: number): number {
        let hurt:number = 1.5*magic_attack - magic_defense;
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