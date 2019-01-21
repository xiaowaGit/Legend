import { Player } from "../base/Player";

/*
    物品基类
*/
export abstract class Res {
    
    public static EQUIPMENT_TYPE:string = 'equipment';//装备
    public static DRUG_TYPE:string = 'drug';//药品(可以认为是要消失的一次性Effect)
    public static SKILL_BOOK_TYPE:string = 'skill_book';//技能书(可以认为是有CD的重复利用Effect,内部维护一个时间戳)

    public name:string = null;
    public type:string = null;

    constructor(name:string,type:string) {
        if(type != Res.EQUIPMENT_TYPE && 
            type != Res.DRUG_TYPE &&
            type != Res.SKILL_BOOK_TYPE)throw new Error("Res type error!");
        this.name = name;
        this.type = type;
    }
    /////使用物品
    abstract use(player:Player):Boolean;
}