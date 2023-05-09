import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  counter: number = -1;
  foobar = 40;
  sub = new Subscription()

  constructor(
    private counterService: CounterService,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sub.add(this.counterService.getValue().subscribe(val => {
      this.counter = val;
      console.log('Counter changed to ', val);
    }));

    setTimeout(() => {
      console.log('I am changing foo bar to 200');
      this.foobar = 200;
      setTimeout(() => {
        console.log('now detecting changes');
        this.changeDetector.markForCheck();
      }, 3000)
    }, 5000);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
