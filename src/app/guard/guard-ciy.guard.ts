import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardCiyGuard implements CanActivate {
  constructor(private router:Router,
    private afAuth:AngularFireAuth,
    private authService:LoginService){
}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return this.authService.afAuth.authState
  .take(1)
  .map(authState=> !! authState)
  .do(authenticated =>{
    if(!authenticated){
      this.router.navigate(['/login-ciy']);
    }
  });
}
  
}
