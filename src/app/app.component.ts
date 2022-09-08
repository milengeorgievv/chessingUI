import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from './interface/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { }

  goToProfile() {
    this.router.navigate(['/', 'profile']);
  }
  goToPlay() {
    this.router.navigate(['/', 'play']);
  }

  goToPuzzle() {
    this.router.navigate(['/', 'puzzles']);
  }
  
  goToPlayers() {
    this.router.navigate(['/', 'players']);
  }
  goToAuthor() {
    this.router.navigate(['/', 'author']);
  }
}
