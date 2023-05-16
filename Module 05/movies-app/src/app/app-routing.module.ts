import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { AccountComponent } from './components/account/account.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'movies/:id/edit', component: MovieEditComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
