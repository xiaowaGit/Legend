import { Player } from "../base/Player";
import { Point } from "../base/Point";
import { PRes } from "../base/PRes";
import { PTerm } from "../drive/MainScene";
import { get_map_width, get_map_height } from "../../../util/mapData";

export interface ResInfo {
    name:string;
    index:number;
    type:'equipment'|'drug'|'skill_book';
    config:{};
}
/*
    物品基类
*/
export abstract class Res {
    
    public static EQUIPMENT_TYPE:'equipment' = 'equipment';//装备
    public static DRUG_TYPE:'drug' = 'drug';//药品(可以认为是要消失的一次性Effect)
    public static SKILL_BOOK_TYPE:'skill_book' = 'skill_book';//技能书(可以认为是有CD的重复利用Effect,内部维护一个时间戳)
    private static inc_index:number = 0;

    public name:string = null;
    public type:'equipment'|'drug'|'skill_book' = null;
    public index:number = 0;

    protected _pres: PRes = null;
    public point:Point = null;

    constructor(name:string,type:'equipment'|'drug'|'skill_book') {
        if(type != Res.EQUIPMENT_TYPE && 
            type != Res.DRUG_TYPE &&
            type != Res.SKILL_BOOK_TYPE)throw new Error("Res type error!");
        this.name = name;
        this.type = type;
        this.index = Res.inc_index;
        Res.inc_index++;
    }
    /////使用物品
    abstract use(player:Player):Boolean;
    /////
    abstract get_config():{};

    public get_res_info():ResInfo {
        return {name:this.name,type:this.type,config:this.get_config(),index:this.index}
    }

    
    ///////放置物品到指定位置
    public res_move_to(pot:Point,term_map:PTerm[][]):void {
        if (pot.x < 0 || pot.x >= get_map_width() || pot.y < 0 || pot.y >= get_map_height()) return;
        let pres:PRes = {res:this,prev:null,next:null};
        let term:PTerm = term_map[pot.x][pot.y];
        if(term.res)term.res.prev = pres;
        pres.next = term.res;
        pres.prev = null;
        term.res = pres;
        this._pres = pres;
        this.point = pot;
    }

    ///////从地图中释放物品
    public res_out(term_map:PTerm[][]):void {
        if (this._pres.prev) this._pres.prev.next = this._pres.next;
        if (this._pres.next) this._pres.next.prev = this._pres.prev;
        if (!this._pres.prev) {
            let term:PTerm = term_map[this.point.x][this.point.y];
            term.res = this._pres.next;
        }
        this._pres.prev = null;
        this._pres.next = null;
    }
}