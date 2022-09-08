import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Player } from 'src/app/interface/player';
import { PlayerService } from 'src/app/service/player.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {merge, Observable, of as observableOf} from 'rxjs';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements AfterViewInit  {
  [x: string]: any;
  //playerChanged = new EventEmitter<Player[]>();
  displayedColumns: string[] = ['name', 'rating', 'dateOfBirth', 'dateOfRegistration'];
  public players: Player[] = []; 

  resultsLength = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator 
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private playerService: PlayerService) {}

  ngAfterViewInit(): void {

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));    

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.playerService.getPlayers().pipe(catchError(() => observableOf(null)));
        }),
        map(players => {
          if (players === null) {
            return [];
          }
          // Only refresh the result length if there is new data.
          this.resultsLength = players.length;
          return players;
        }),
      )
      .subscribe(players => (this.players = players));
  }
  OnClick() {
    this.getPlayers();
  }

  ngOnInit() {
    this.getPlayers();
  }

  public getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      (currPlayers: Player[]) => {
        this.players = currPlayers;
        })
      }
    }

