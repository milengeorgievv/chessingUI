import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {

  a1: any = ['white_rook'];
  a2: any = ['white_pawn'];
  a3: any = [];
  a4: any = [];
  a5: any = [];
  a6: any = [];
  a7: any = ['black_pawn'];
  a8: any = ['black_rook'];
  b1: any = ['white_knight'];
  b2: any = ['white_pawn'];
  b3: any = [];
  b4: any = [];
  b5: any = [];
  b6: any = [];
  b7: any = ['black_pawn'];
  b8: any = ['black_knight'];
  c1: any = ['white_bishop'];
  c2: any = ['white_pawn'];
  c3: any = [];
  c4: any = [];
  c5: any = [];
  c6: any = [];
  c7: any = ['black_pawn'];
  c8: any = ['black_bishop'];
  d1: any = ['white_queen'];
  d2: any = ['white_pawn'];
  d3: any = [];
  d4: any = [];
  d5: any = [];
  d6: any = [];
  d7: any = ['black_pawn'];
  d8: any = ['black_queen'];
  e1: any = ['white_king'];
  e2: any = ['white_pawn'];
  e3: any = [];
  e4: any = [];
  e5: any = [];
  e6: any = [];
  e7: any = ['black_pawn'];
  e8: any = ['black_king'];
  f1: any = ['white_bishop'];
  f2: any = ['white_pawn'];
  f3: any = [];
  f4: any = [];
  f5: any = [];
  f6: any = [];
  f7: any = ['black_pawn'];
  f8: any = ['black_bishop'];
  g1: any = ['white_knight'];
  g2: any = ['white_pawn'];
  g3: any = [];
  g4: any = [];
  g5: any = [];
  g6: any = [];
  g7: any = ['black_pawn'];
  g8: any = ['black_knight'];
  h1: any = ['white_rook'];
  h2: any = ['white_pawn'];
  h3: any = [];
  h4: any = [];
  h5: any = [];
  h6: any = [];
  h7: any = ['black_pawn'];
  h8: any = ['black_rook'];

  constructor(private router: Router) { }


  drop(event: CdkDragDrop<string[]>) {
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(
    //     event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex,
    //   );
    //   event.container.data = [event.item.data];
    // }
    if (event.previousContainer != event.container && event.container.data.length == 0 
        && event.isPointerOverContainer == true) { //&& event.container.data.length == 0
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  validateMove(item: CdkDrag<string>, list: CdkDropList<any>) {
    if(list.data.length > 0) { // validate capture or cancel move

      if(false) { //validateCapture();
        
        return true;
      }
      

      return false;
    }
    //validate if its ur piece

    return true;
  }

}
