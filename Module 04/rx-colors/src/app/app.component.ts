import { Component, OnInit } from '@angular/core';
import { Color } from './models/color.model';
import { Observable, Subject, distinctUntilChanged, map, merge, mergeAll, of, switchAll } from 'rxjs';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search$ = new Subject<string>();
  results$!: Observable<Color[]>;
  isBusy$!: Observable<boolean>;

  constructor(private colorsService: ColorsService){}

  ngOnInit(): void {
    const res$ = this.search$.pipe(
      map(keyword => this.colorsService.search(keyword)), 
      switchAll()
    )

    this.results$ = res$;

    const true$ = this.search$.pipe(
      map(_ => true)
    );

    const false$ = this.results$.pipe(
      map(_ => false)
    );

    this.isBusy$ = merge(true$, false$).pipe(
      distinctUntilChanged()
    );

  }
}
