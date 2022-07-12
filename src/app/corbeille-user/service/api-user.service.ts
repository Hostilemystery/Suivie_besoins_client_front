import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const url =environment.host+"trashs";
const drl= environment.host+"del";
@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private http: HttpClient) { }



  getUser():Observable<any>{
    return this.http.get<any>(url).pipe(map((res:any)=>{
      return res;
    }))
  }

  restoreUser(id: number):Observable<any>{
    return this.http.get<any>(url+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteUser(id: number):Observable<any>{
    return this.http.delete<any>(drl+'/'+id,).pipe(map((res:any)=>{
      return res;
    }))
  }

}
