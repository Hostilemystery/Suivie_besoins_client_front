import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


const url =environment.host+"countClient";
const rrl =environment.host+"countUser";
const drl =environment.host+"countService";
@Injectable({
  providedIn: 'root'
})
export class CountService {

constructor(private http: HttpClient) { }

getClient():Observable<any>{
  return this.http.get<any>(url).pipe(map((res:any)=>{
    return res;
  }))
}

getUser():Observable<any>{
  return this.http.get<any>(rrl).pipe(map((res:any)=>{
    return res;
  }))
}

getService():Observable<any>{
  return this.http.get<any>(drl).pipe(map((res:any)=>{
    return res;
  }))
}
}
