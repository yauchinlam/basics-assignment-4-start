import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-4-start';
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  onIncrementAdded(intervalnumber:number)
  {
    if(intervalnumber % 2 ==0)
    {
      this.evenNumbers.push(intervalnumber);
    }
    else
    {
      this.oddNumbers.push(intervalnumber);
    }
  }
}
