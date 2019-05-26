import { Effect } from "../base/Effect";
import { Target } from "../base/Target";
import { MainScene } from "../drive/MainScene";
import { Actor } from "../base/Actor";
import { Attack } from "./Attack";
import { Move } from "./Move";
import a_star_pathfind from "../../../util/pathFinding";
import { Point } from "../base/Point";
import { Monster } from "../base/Monster";
import { get_l } from "../../../util/tool";

/*
    怪物AI
*/

export class MonsterActiveAI implements Effect {
    
    private _target:Monster = null;
    private _life_time:number = null;///存活秒数
    private _create_time:number = Date.now();
    private _stop_time:number = Date.now();
    private _cd_time:number = null;///攻击间隔X秒一次

    constructor(active:Monster) {
        this._target = active;
        this._life_time = active.get_life_time() * 1000;
        this._cd_time = active.get_cd_time() * 1000;
    }

    getName(): string {
        return "MonsterActiveAI";
    }
    getActive():Target {
        return this._target;
    }
    getTarget():Target {
        return this._target;
    }
    run(): void {
        if (this._stop_time > Date.now()) return;/// CD 暂停时间
        let pet:Monster = this._target;
        let scene:MainScene = pet.get_scene();
        if (this._create_time + this._life_time < Date.now()) {///超过存活期
            scene.remove_actor(pet);
            pet.notice_all_player("onDelete",pet.get_info());
        }else{
            if (pet.is_die) return;
            let target_l:number = pet.get_target_l();
            let attack_target:Actor = pet.get_attack_target();
            if (attack_target && target_l < 15) {
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
                            let pathFind:a_star_pathfind = scene.pathFind;
                            let effect:Move = new Move(attack_target.point,pathFind,pet,false);
                            pet.pushEffect(effect);
                        }
                    }
                }
            }else{
                if(pet.hasEffect('Move')) return;
                pet.set_attack_target(null);
                /// 搜索区域 并 设置攻击目标
                this._stop_time = Date.now() + this._cd_time;
                let targets:Actor[] = scene.getTarget();
                let pet_pot:Point = pet.point;
                let c_l:number,c_target:Actor;
                targets.forEach(actor => {
                    let ac_pot:Point = actor.point;
                    let l:number = get_l(pet_pot,ac_pot);
                    if (l < 15) {
                        if (c_target == null || c_l > l) {
                            c_target = actor;
                            c_l = l;
                        }
                    }
                });
                if (c_target) pet.set_attack_target(c_target);
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