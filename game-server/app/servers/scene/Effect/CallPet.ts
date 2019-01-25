import { Effect } from "../base/Effect";
import { Target } from "../base/Target";
import { PetConfig, Pet } from "../base/Pet";
import { Player } from "../base/Player";
import { MainScene } from "../drive/MainScene";
import { MonsterAI } from "./MonsterAI";

/*
    召唤宠物
*/

export class CallPet implements Effect {
    
    private _target:Player = null;
    private _config:PetConfig = null;
    private _is_run:boolean = false;

    constructor(config:PetConfig,active:Player) {
        this._target = active;
        this._config = config;
    }

    getName(): string {
        return "CallPet";
    }
    getActive():Target {
        return this._target;
    }
    getTarget():Target {
        return this._target;
    }
    run(): void {
        let pet:Pet = new Pet(this._config,this._target);
        let main_scene:MainScene = this._target.get_scene();
        if(!this._target.add_pet(pet)) return;
        main_scene.add_actor(pet);
        let effect:Effect = new MonsterAI(pet);
        pet.pushEffect(effect);
    }
    is_run(): Boolean {
        return this._is_run;
    }
    kill(): void {
        return;
    }

}