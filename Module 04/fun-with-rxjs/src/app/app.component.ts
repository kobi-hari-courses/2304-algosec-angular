import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Observer, ReplaySubject, Subject, interval, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }


  createObserver(id: string): Observer<number> {
    return {
      next: (val: number) => console.log(`observer ${id} next ${val}`), 
      complete: () => console.log(`observer ${id} complete`), 
      error: (err) => console.log(`observer ${id} error ${err}`)
    }
  }

  createOfObservable(): Observable<number> {
    return of(42);
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomColdObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(42);
      setTimeout(() => observer.next(100), 1000);
      setTimeout(() => observer.next(200), 3000);
      setTimeout(() => observer.next(300), 6000);
      setTimeout(() => observer.complete(), 10000);
      // setTimeout(() => observer.next(500), 11000);
    });
  }

  createCustomHotObservable(): Observable<number> {
    const subj = new Subject<number>();

    subj.next(42);
    setTimeout(() => subj.next(100), 1000);
    setTimeout(() => subj.next(200), 3000);
    setTimeout(() => subj.next(300), 6000);
    setTimeout(() => subj.complete(), 10000);

    return subj;
  }

  createCustomBehaviorObservable(): Observable<number> {
    const subj = new BehaviorSubject<number>(42);
    setTimeout(() => subj.next(100), 1000);
    setTimeout(() => subj.next(200), 3000);
    setTimeout(() => subj.next(300), 6000);
    setTimeout(() => subj.complete(), 10000);

    return subj;
  }

  createCustomReplayObservable(): Observable<number> {
    const subj = new ReplaySubject<number>();
    subj.next(42);
    setTimeout(() => subj.next(100), 1000);
    setTimeout(() => subj.next(200), 3000);
    setTimeout(() => subj.next(300), 6000);
    setTimeout(() => subj.complete(), 10000);

    return subj;
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');

    const observable = this.createCustomReplayObservable();

    observable.subscribe(observerA);

    setTimeout(() => observable.subscribe(observerB), 2500);

  }
}
