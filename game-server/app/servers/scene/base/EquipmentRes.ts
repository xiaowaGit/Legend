import { Res } from "./Res";
import { Player } from "./Player";

/*
    装备基类
*/
export abstract class EquipmentRes extends Res {

    public static ARMS_TYPE:string = 'arms';//武器
    public static HELMET_TYPE:string = 'helmet';//头盔
    public static CLOTHES_TYPE:string = 'clothes';//衣服
    public static SHOES_TYPE:string = 'shoes';//鞋子
    public static JEWELRY_TYPE:string = 'jewelry';//首饰
    public static NECKLACE_TYPE:string = 'necklace';//项链

    public part:string = null;

    constructor(name:string,part:string){
        super(name,Res.EQUIPMENT_TYPE);
        if(part != EquipmentRes.ARMS_TYPE && 
            part != EquipmentRes.HELMET_TYPE &&
            part != EquipmentRes.CLOTHES_TYPE &&
            part != EquipmentRes.SHOES_TYPE &&
            part != EquipmentRes.JEWELRY_TYPE &&
            part != EquipmentRes.NECKLACE_TYPE)throw new Error("EquipmentRes part error!");
        this.part = part;
    }

    //////卸下装备
    abstract unuse(player:Player):void;
}