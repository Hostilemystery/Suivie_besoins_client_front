import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const url =environment.host+"utilisateur";
const rrl =environment.host+"role";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  postUser(data: any):Observable<any>{
    return this.http.post<any>(url,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getUser():Observable<any>{
    return this.http.get<any>(url).pipe(map((res:any)=>{
      return res;
    }))
  }
  updateUser(data: any,id: number):Observable<any>{
    return this.http.put<any>(url+'/'+id , data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteUser(id: number):Observable<any>{
    return this.http.delete<any>(url+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  getRole():Observable<any>{
    return this.http.get<any>(rrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
