import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class AccountService {

  constructor(private http: HttpClient) {
  }


  deletePhone(id: any): Observable<any> {
    return this.http.delete("http://localhost:8080/api/profile/phone/" + id)
  }


  deleteEmail(id: any): Observable<any> {
    return this.http.delete("http://localhost:8080/api/profile/email/" + id)
  }


  addEmail(obj: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/profile/email", obj)
  }

  addPhone(obj: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/profile/phone", obj)
  }


  saveSetting(obj: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/profile/setup", obj);
  }


}
