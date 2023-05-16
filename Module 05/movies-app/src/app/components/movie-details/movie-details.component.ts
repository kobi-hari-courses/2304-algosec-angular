import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, mergeAll, switchAll } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movies: MoviesService, 
    private route: ActivatedRoute, 
    private router: Router
    ){}

  movie$!: Observable<Movie>;

  async ngOnInit() {
    const id$ = this.route.params.pipe(
      map(prms => Number(prms['id']))
    );

    this.movie$ = id$.pipe(
      map(id => this.movies.getMovieByIndex(id).then(val => val!)), 
      switchAll()
    )

  }

  onNext() {
    const id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', id + 1]);
  }

  onEdit() {
    const id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', id, 'edit']);
  }


  onPrev() {
    const id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', id - 1]);

  }



}
