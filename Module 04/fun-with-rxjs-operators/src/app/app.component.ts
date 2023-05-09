import { Component } from '@angular/core';
import { Observable, Observer, Subscription, filter, from, fromEvent, interval, map, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDemo = false;
  toggleDemo() {this.showDemo = !this.showDemo};

  createObserver<T>(id: string): Observer<T> {
    return {
      next: (val: T) => console.log(`Observer ${id} next ${val}`), 
      complete: () => console.log(`Observer ${id} complete`), 
      error: (err: any) => console.log(`Observer ${id} error ${err}`), 
    }
  }

  subscribeObserver<T>(observable: Observable<T>, id: string): Subscription {
    const observer = this.createObserver<T>(id);
    return observable.subscribe(observer);
  }

  go() {
    const source$ = interval(1000);
    const output$ = source$.pipe(
      take(3)
    );

    this.subscribeObserver(source$, 'source');
    this.subscribeObserver(output$, 'output');
  }

}
