import { Player } from "./Player";

export interface PActor {
    prev:PActor;
    next:PActor;
    player:Player;
}