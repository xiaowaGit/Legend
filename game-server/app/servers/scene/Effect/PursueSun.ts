import { Effect, EffectConfig } from "../base/Effect";
import { Target } from "../base/Target";
import { Actor } from "../base/Actor";
import { MainScene, PTerm } from "../drive/MainScene";
import { Point } from "../base/Point";
import { PActor } from "../base/PActor";

/*
    逐日剑法
*/

export class PursueSun implements Effect {

    private _config:EffectConfig = null;
    private _active:Actor = null;
    private _target:Target = null;
    private _dir:number = null;
    /*
       4  5  6
       3 dir 7
       2  1  8
    */
    constructor(config:EffectConfig,active:Actor,target:Target,dir:number) {
        this._config = config;
        this._active = active;
        this._target = target;
        this._dir = dir;
    }
    getName(): string {
        return 'PursueSun';
    }
    getActive(): Target {
        return this._active;
    }
    getTarget(): Target {
        return this._target;
    }
     /*
       4  5  6
       3 dir 7
       2  1  8
    */
    public static select_grid(pot:Point,grid_map:number[][],dir:number,config:EffectConfig):Point[] {
        if (dir < 1 || dir > 8) throw new Error("select_grid dir error");
        function select(pot:Point,grid_map:number[][],ax:number,ay:number):Point {
            let pott:Point = {x:pot.x + ax,y:pot.y + ay}
            if (grid_map[pott.x][pott.y]) return pott;
            else return null;
        }
        let ax:number = 0;
        let ay:number = 0;
        if (dir == 1)      {ax = 0,ay = -1}
        else if (dir == 2) {ax = -1,ay = -1}
        else if (dir == 3) {ax = -1,ay = 0}
        else if (dir == 4) {ax = -1,ay = 1}
        else if (dir == 5) {ax = 0,ay = 1}
        else if (dir == 6) {ax = 1,ay = 1}
        else if (dir == 7) {ax = 1,ay = 0}
        else if (dir == 8) {ax = 1,ay = -1}
        let pot_next:Point = select(pot,grid_map,ax,ay);
        let limit:number = 1;
        let ret:Point[] = [];
        while (pot_next) {
            ret.push(pot_next);
            limit++;
            if (limit > config.attack_l) break;
            pot_next = select(pot_next,grid_map,ax,ay);
        }
        return ret;
    }

    run(): void {
        let scene:MainScene = this._active.get_scene();
        let pot1:Point = this._active.point;
        this._active.killEffectByName('Move');
        this._active.notice_all_player('onPursueSun',
        {active:this._active.name,
        dir:this._dir});
        let pots:Point[] = PursueSun.select_grid(pot1,scene.grid_map,this._dir,this._config);
        pots.forEach(element => {
            let term:PTerm = scene.term_map[element.x][element.y];
            let p:PActor = term.player;
            while(p) {
                let actor:Actor = p.player;
                let physics_attack:number = this._active.physics_attack;
                let physics_defense:number = actor.physics_defense;
                let hurt:number = PursueSun.getHurt(physics_attack,physics_defense);
                actor.blood -= hurt;
                p = p.next;
            }
        });
    }
    
    public static getHurt(physics_attack: number, physics_defense: number): number {
        let hurt:number = 3*physics_attack - physics_defense;
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