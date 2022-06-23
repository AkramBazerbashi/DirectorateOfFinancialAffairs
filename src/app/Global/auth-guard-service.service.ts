import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({ 
  providedIn: 'root' 
})

export class AuthGuardServiceService implements CanActivate 
{  
  constructor(public auth: AuthServiceService, public router: Router) {}
  canActivate(): boolean {

    console.log('begin');
    console.log('result '+this.auth.isAuthenticated());
  if (!this.auth.isAuthenticated()) {
    this.router.navigate(['login']);
    return false;
  }
  return true;
}}