import { Time } from "@angular/common";
import { GameType } from "../enum/gametype.enum";
import { Piece } from "../enum/piece.enum";
import { Square } from "../enum/square.enum";

export interface Game {
    id:number;
    whiteId: number;
    blackId: number;
    gameType: GameType;
    hasStarted: boolean;
    hasFinished: boolean;
    //hasWinner: boolean; // can be defined from winnerID
    isWhiteToMove: boolean;
    whiteTimeLeft: Time;
    blackTimeLeft: Time;
    winnerID: number;
    position: Map<Square, Piece>;
}