import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit {
  counter$!: Observable<number>;

  constructor(
    private counterService: CounterService) { }

  ngOnInit(): void {
    this.counter$ = this.counterService.getValue();
  }

}
