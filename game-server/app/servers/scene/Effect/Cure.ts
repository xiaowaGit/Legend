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
    private continue_time: number = 1;

    constructor(config:EffectConfig,target:Actor) {
        this._config = config;
        this._target = target;
        this.continue_time = this._config.continue_time * 1000;
        this._gap_tick *= 1000;
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
        if (this._creator_time + this.continue_time < Date.now()) {
            this._is_end = true;
            this._is_run = false;
            return;
        }
        if (!this._is_run) {
            this._gap_time = Date.now();
            this._is_run = true;
            this._target.killEffectByName('Move');
            this._target.notice_all_player('onCure',{active:this._target.name});
        }else{
            if (Date.now() - this._gap_time > this._gap_tick) {
                let add_blood:number = this._config.add_continue_blood || 0;
                let add_magic:number = this._config.add_continue_magic || 0;
                this._target.blood += add_blood;
                this._target.magic += add_magic;
                this._gap_time = Date.now();
                this._target.notice_all_player('onCure_Add',{
                    active:this._target.name,
                    blood:add_blood,
                    magic:add_magic,});
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