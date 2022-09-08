import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerService } from './service/player.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthorComponent } from './pages/author/author.component';
import { PlayComponent } from './pages/play/play.component';
import { PlayersComponent } from './pages/players/players.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PuzzleComponent } from './pages/puzzle/puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AuthorComponent,
    PlayComponent,
    PlayersComponent,
    PuzzleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    //MaterialExampleModule,
    DragDropModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
