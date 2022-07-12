import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const url =environment.host+"Service";
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { }

  postService(data: any):Observable<any>{
    return this.http.post<any>(url,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getService():Observable<any>{
    return this.http.get<any>(url).pipe(map((res:any)=>{
      return res;
    }))
  }
  getClient(id:any):Observable<any>{
    return this.http.get<any>(url+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  updateService(data: any, id: number):Observable<any>{
    return this.http.put<any>(url+'/'+id , data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteService(id: number):Observable<any>{
    return this.http.delete<any>(url+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
