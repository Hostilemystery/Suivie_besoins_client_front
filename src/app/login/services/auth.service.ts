import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOption = {
  headers:new HttpHeaders({
  'Content-Type': 'application/json'})
};

const url = environment.host;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient,
   ) { }

login(email:string, password:string): Observable<any> {
  return this.http.post(
    url+'login',
    { email, password }
  );
}
}
