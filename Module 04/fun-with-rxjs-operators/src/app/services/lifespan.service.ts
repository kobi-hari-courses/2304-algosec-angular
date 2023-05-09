import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LifespanService implements OnDestroy {
  private _destory$ = new Subject<void>();

  constructor() { }

  get destroy$() { return this._destory$.asObservable()}

  ngOnDestroy(): void {
    this._destory$.next();
    this._destory$.complete();
  }
}
