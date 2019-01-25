import { Effect, EffectConfig } from "../base/Effect";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";


/*
    治愈术
*/

export class Cure implements Effect {
    
    private _config:EffectConfig = null;
    private _target:Actor = null;
    private _is_run:boolean = false;
    private _creator_time:number = Date.now();
    private _is_end:boolean = false;

    private _gap_time:number = null;
    private _gap_tick:number = 3;////每3秒 恢复一次气血 法力

    constructor(config:EffectConfig,target:Actor) {
        this._config = config;
        this._target = target;
    }

    getName(): string {
        return 'Cure';
    }
    getActive(): Target {
        return this._target;
    }
    getTarget(): Target {
        return this._target;
    }
    run(): void {
        if (this._is_end) { return ;}
        if (this._creator_time + this._config.continue_time < Date.now()) {
            this._is_end = true;
            this._is_run = false;
            return;
        }
        if (!this._is_run) {
            this._gap_time = Date.now();
            this._is_run = true;
        }else{
            if (Date.now() - this._gap_time > this._gap_tick) {
                this._target.blood += this._config.add_continue_blood || 0;
                this._target.magic += this._config.add_continue_magic || 0;
                this._gap_time = Date.now();
            }
        }
    }
    is_run(): Boolean {
        return this._is_run;
    }
    kill(): void {
        this._is_end = true;
        this._is_run = false;
    }

}