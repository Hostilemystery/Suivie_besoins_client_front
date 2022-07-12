import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const url =environment.host+"trash";
const drl =environment.host+"delete";
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) { }

  getClient():Observable<any>{
    return this.http.get<any>(url).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteClient(id: number):Observable<any>{
    return this.http.delete<any>(drl+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  restoreClient(id: number):Observable<any>{
    return this.http.get<any>(url+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
