import { Res } from "./Res";

export interface DrugConfig {
    name:string;
    blood:number;///气血增加
    magic:number;///魔法增加
    effect_name:string;////产生effect的名字，没有为空串
}
/*
    药品类（只产生一次Effect的物品）
*/
export class Drug extends Res {
}