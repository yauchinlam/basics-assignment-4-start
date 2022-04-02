import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() incrementor = new EventEmitter<number>();
incrementing: number;
handler;
  constructor() { 
    this.incrementing=0;
  }
  ngOnInit(): void {
  }

  Start()
  {
    this.handler = setInterval(() => {
        this.incrementor.emit(this.incrementing++);
        console.log(this.incrementing)
  }, 1000);
  }
 
  Stop(){
    clearInterval(this.handler);
  }
}
