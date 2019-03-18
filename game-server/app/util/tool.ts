import { Point } from "../servers/scene/base/Point";

/*
    常用工具函数
*/

export function get_l(pot1:Point,pot2:Point):number {
    let x0:number = pot1.x;
    let y0:number = pot1.y;
    let x1:number = pot2.x;
    let y1:number = pot2.y;
    return Math.sqrt((x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1));
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}