import { Effect } from "../base/Effect";
import { Target } from "../base/Target";
import { Pet } from "../base/Pet";
import { Player } from "../base/Player";
import { MainScene } from "../drive/MainScene";
import { Actor } from "../base/Actor";
import { Attack } from "./Attack";
import { Move } from "./Move";

/*
    宠物AI
*/

export class MonsterAI implements Effect {
    
    private _target:Pet = null;
    private _life_time:number = null;///存活秒数
    private _create_time:number = Date.now();
    private _stop_time:number = Date.now();
    private _cd_time:number = null;///攻击间隔X秒一次

    constructor(active:Pet) {
        this._target = active;
        this._life_time = active.get_life_time();
        this._cd_time = active.get_cd_time();
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
        if (this._stop_time > Date.now()) return;/// CD 暂停时间
        let pet:Pet = this._target;
        let player:Player = pet.get_player();
        let scene:MainScene = player.get_scene();
        if (this._create_time + this._life_time > Date.now()) {///超过存活期
            player.remove_pet(pet);
            scene.remove_actor(pet);
        }else{
            let attack_target:Actor = pet.get_attack_target();
            if (attack_target) {
                if (attack_target.is_die) {
                    pet.set_attack_target(null);
                    return;
                }else{
                    if(pet.hasEffect('Move')) return;
                    else {
                        let l:number = pet.get_target_l();
                        if (l < 2) {
                            let attack:Attack = new Attack(pet,attack_target);
                            pet.pushEffect(attack);
                            this._stop_time = Date.now() + this._cd_time;
                        }else{
                            let grid_map:number[][] = scene.grid_map;
                            let effect:Move = new Move(attack_target.point,grid_map,pet,false);
                            pet.pushEffect(effect);
                        }
                    }
                }
            }else{
                let l:number = pet.get_player_l();
                if (l > 8) {
                    let grid_map:number[][] = scene.grid_map;
                    let effect:Move = new Move(player.point,grid_map,pet,false);
                    pet.pushEffect(effect);
                }
            }
        }
    }
    is_run(): Boolean {
        return true;
    }
    kill(): void {
        return;//此效果不能被移除
    }

}