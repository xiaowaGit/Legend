import { Effect } from "../base/Effect";
import { Target } from "../base/Target";

/*
    怪物AI效果
*/

export class MonsterAI implements Effect {
    
    private _target:Target = null;

    constructor(active:Target) {
        this._target = active;
    }

    getName(): string {
        return "MonsterAI";
    }
    getActive():Target {
        return this._target;
    }
    getTarget():Target {
        return this._target;
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
    is_run(): Boolean {
        throw new Error("Method not implemented.");
    }
    kill(): void {
        throw new Error("Method not implemented.");
    }

}