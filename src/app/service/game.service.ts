import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Game } from '../interface/game';
import { environment } from "src/environments/environment";
import { Square } from "../enum/square.enum";
import { Time } from "@angular/common";
import { Piece } from "../enum/piece.enum";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {

    }

    public getGames() : Observable<Game[]> {
        return this.http.get<Game[]>(`${this.apiServerUrl}/game/all`);
    }

    public createGame(game : Game) : Observable<Game> {
        return this.http.post<Game>(`${this.apiServerUrl}/game/add`, game);
    }

    public updateMoveInGame(
        gameId: number, timeLeft : Time, newPosition : Map<Square, Piece>) {
            return this.http.put<Game>(`${this.apiServerUrl}/game/update/${gameId}`, 
            {gameId, timeLeft, newPosition});
            
    }

    public deleteGame(gameId: number) {
        return this.http.delete<void>(`${this.apiServerUrl}/game/delete/${gameId}`);
    }
}