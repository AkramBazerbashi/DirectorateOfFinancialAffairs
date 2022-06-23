import { Injectable } from '@angular/core';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Injectable({ 
  providedIn: 'root' 
})


export class AuthServiceService {
  constructor(public jwtHelper: JwtHelperService) {}  // ...

  public isAuthenticated(): boolean { 
    let token:string ;
    console.log('dsddddddddddddddddddddddddddddddddddddddd');
     token = localStorage.getItem('token') || '';    // Check whether the token is expired and return
     console.log(token );
     console.log(!this.jwtHelper.isTokenExpired(token) );
    // true or false    
    return !this.jwtHelper.isTokenExpired(token);
  }
}
