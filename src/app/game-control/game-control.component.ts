import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() incrementor = new EventEmitter<{incrementi:number}>();
incrementing: number;
start:boolean;
  constructor() { 
    this.incrementing=0;
    this.start = true;
  }
  ngOnInit(): void {
  }

  Start()
  {
    setInterval(() => {
        this.incrementor.emit({incrementi: this.incrementing++});
  }, 1000);
  }
 
  Stop(){
    clearInterval();
  }

}
