import { Effect } from "../base/Effect";
import { Target } from "../base/Target";

/*
    召唤麒麟
*/

export class Callkylin implements Effect {
    
    private _target:Target = null;

    constructor(active:Target) {
        this._target = active;
    }

    getName(): string {
        return "Callkylin";
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