import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, filter, firstValueFrom, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService, 
    private router: Router){}


  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<true | UrlTree> {

      console.log('Starting auth guard');

      const isLoggedIn = await firstValueFrom(this.auth.getStatus());

      if (isLoggedIn) return true;

      const targetUrl = state.url;
      console.log('Thau Shall Not Pass', targetUrl);

      this.auth.getStatus().pipe(
        filter(val => val === true), 
        take(1), 
      ).subscribe(_ => {
        this.router.navigateByUrl(targetUrl);
      });


      return this.router.createUrlTree(['account']);
  }
  
}
