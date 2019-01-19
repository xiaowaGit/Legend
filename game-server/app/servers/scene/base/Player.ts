import { Actor } from "./Actor";
import { Point } from "./Point";
import { MainScene, PTerm } from "../drive/MainScene";
import { PActor } from "./PActor";

/*
    玩家类
*/
export class Player extends Actor {
    

    constructor(name:string,map_w:number,map_h:number,scene:MainScene,pactor:PActor) {
        super(name,map_w,map_h,scene,pactor);
    }

}