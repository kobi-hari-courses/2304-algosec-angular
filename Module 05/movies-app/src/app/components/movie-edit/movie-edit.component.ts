import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchAll, tap } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent {
  movie$!: Observable<Movie>;

  
  constructor(
    private movies: MoviesService, 
    private route: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    let index$ = this.route.params.pipe(
      map(prms => Number(prms['id']) )
    );

    this.movie$ = index$.pipe(
      map(index => this.movies.getMovieByIndex(index).then(val => val!)), 
      switchAll(), 
    )
  }

}
