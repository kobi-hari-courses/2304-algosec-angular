import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private movies: MoviesService){}
  count$: Observable<number> = from(this.movies.getCount());

}
