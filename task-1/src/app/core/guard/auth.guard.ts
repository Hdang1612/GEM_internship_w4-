import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot, //thông tin route  cbi truy cập
    state: RouterStateSnapshot // đại diện toàn bộ cây route
  ): boolean | Promise<boolean> {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      return true;
    } else {
      console.log('auth');
      return this.router.navigate(['/login']);
    }
  }
}
