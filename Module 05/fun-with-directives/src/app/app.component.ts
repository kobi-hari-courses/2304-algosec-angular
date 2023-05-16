import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { __setFunctionName } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFavoritedColor = 'lime';

  constructor() {
    setTimeout(() => this.myFavoritedColor = 'cyan', 5000);

    interval(1000).subscribe(
      _ => {
        this.current = (this.current + 1) % this.colors.length;
      }
    )
  }

  colors = ['red', 'green', 'blue', 'purple'];
  current = 0; 

  

  doThisWhenClicked(){}


  whenVanished(color: string) {
    console.log('HEY, the user just hidden the highlight, it was', color);
  }
}
