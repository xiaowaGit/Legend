import { Actor } from "./Actor";

export interface PActor {
    prev:PActor;
    next:PActor;
    player:Actor;
}