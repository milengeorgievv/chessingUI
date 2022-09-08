import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject, tap } from 'rxjs';
import { Player } from '../interface/player';
import { environment } from 'src/environments/environment';
import { Status } from '../enum/status.enum';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private apiServerUrl = environment.apiBaseUrl;
    subject = new Subject<Player[]>();
    players: Player[] = [];

    //configUrl = 'assets/config.json';

    constructor(private http: HttpClient) {
    }
    // private _refreshRequired = new Subject<void>();
    // get RefreshRequired() {
    //     return this._refreshRequired;
    // }

    // getConfig() {
    //     return this.http.get<Player>(this.configUrl);
    //   }
    private _refreshRequired = new Subject<void>();

    get RefreshRequired() {
        return this._refreshRequired;
    }

    public getPlayers() : Observable<Player[]> {
        return this.http.get<Player[]>(`${this.apiServerUrl}/player/all`);
    }

    public addPlayer(player : Player) : Observable<Player> {
        return this.http.post<Player>(`${this.apiServerUrl}/player/add`, player).pipe( 
            tap(()=>{
                this.RefreshRequired.next();
            })
        );
        // .pipe(
        //     tap(() => {
        //         this.RefreshRequired.next();
        //     }));
    }

    public updatePlayer(player : Player) : Observable<Player> {
        return this.http.put<Player>(`${this.apiServerUrl}/player/update/${player.id}`, player);
    }

    public deletePlayer(playerId : number) : Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/player/delete`);
    }
}