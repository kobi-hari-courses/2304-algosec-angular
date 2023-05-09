import { ChangeDetectorRef, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now = Date.now();
  much = 0.53;
  msg = 'hello';

  constructor(private changeDetector: ChangeDetectorRef) {
    interval(1000).subscribe(
      _ => {
        changeDetector.detectChanges()
      }
    )
  }

  changeMessage() {
    this.msg = 'Something else';
  }
}
