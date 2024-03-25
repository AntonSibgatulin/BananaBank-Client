import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signIn(obj: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/auth/signin", obj);
  }

  signUp(obj: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/auth/signup", obj);
  }

  getMe():Observable<any> {
    return this.http.get("http://localhost:8080/api/profile/me")
  }
}

