import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const url =environment.host+"Notification";
const rrl =environment.host+"client";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  postMail(data: any):Observable<any>{
    return this.http.post<any>(url,data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((res:any)=>{
      return res;
    }))
  }
  getUser():Observable<any>{
    return this.http.get<any>(rrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
