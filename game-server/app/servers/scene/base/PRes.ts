import { Res } from "../Res/Res";

export interface PRes {
    prev:PRes;
    next:PRes;
    res:Res;
}