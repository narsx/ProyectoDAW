import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, public router:Router) { }

  public isAuthenticated(): boolean {


    const token = localStorage.getItem('token') || "";

    const decoded = this.jwtHelper.decodeToken(token)
    console.log(decoded)
    return !this.jwtHelper.isTokenExpired(token);
  }
  
  public isLogged(): boolean{
    const token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }



}
