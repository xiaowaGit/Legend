import { Player } from "../base/Player";

export interface ResInfo {
    name:string;
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
        return {name:this.name,type:this.type,config:this.get_config()}
    }
}