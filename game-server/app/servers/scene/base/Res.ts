
/*
    物品基类
*/
export abstract class Res {
    
    public static EQUIPMENT_TYPE:string = 'equipment';//装备
    public static DRUG_TYPE:string = 'drug';//药品
    public static SKILL_BOOK_TYPE:string = 'skill_book';//技能书

    public name:string = null;
    public type:string = null;

    constructor(name:string,type:string) {
        if(type != Res.EQUIPMENT_TYPE && 
            type != Res.DRUG_TYPE &&
            type != Res.SKILL_BOOK_TYPE)throw new Error("Res type error!");
        this.name = name;
        this.type = type;
    }

    abstract use():void;
}