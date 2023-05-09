import { Component } from '@angular/core';
import { interval, takeUntil } from 'rxjs';
import { LifespanService } from 'src/app/services/lifespan.service';

@Component({
  selector: 'app-demo-destroy',
  templateUrl: './demo-destroy.component.html',
  styleUrls: ['./demo-destroy.component.css'], 
  providers: [LifespanService]
})
export class DemoDestroyComponent {
  constructor(private lifespan: LifespanService) {
    const i$ = interval(1000).pipe(
      takeUntil(this.lifespan.destroy$)
    );
    i$.subscribe(val => console.log('demo next ', val));
  }

}
