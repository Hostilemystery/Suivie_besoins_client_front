import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../login/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private token: TokenService, private router: Router){}
  canActivate(){
    if(this.token.getToken()){
      // alert(this.token.getUser())
      return true;
    }
    this.router.navigate(['login']);
    // alert('nonok');
    return false
  }

}
