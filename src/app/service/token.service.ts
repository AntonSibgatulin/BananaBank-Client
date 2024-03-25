import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {Observable, of, switchMap} from "rxjs";

@Injectable({providedIn: "root"})
export class TokenService {
  constructor(private authService: AuthService) {
  }


  saveToken(token: any) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAuth() {
    return localStorage.getItem("token") != null && localStorage.getItem("token") != ""
  }

  getMe(): Observable<any> {
    return this.authService.getMe();
  }

  exit() {
    localStorage.clear()
  }

}
