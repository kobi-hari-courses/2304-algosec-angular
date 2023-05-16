import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  constructor(
    private movies: MoviesService, 
    private router: Router
  ){}

  captions$ = from(this.movies.getAllTitles());

  onSelectMovie(index: number) {
    this.router.navigate(['movies', index]);
  }

}
