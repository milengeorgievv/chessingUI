import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './pages/play/play.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthorComponent } from './pages/author/author.component';
import { PlayersComponent } from './pages/players/players.component';
import { PuzzleComponent } from './pages/puzzle/puzzle.component';

const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'play', component: PlayComponent },
    { path: 'puzzles', component: PuzzleComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'author', component: AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
