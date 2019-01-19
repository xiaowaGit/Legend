import { Res } from "./Res";

export interface PRes {
    prev:PRes;
    next:PRes;
    res:Res;
}