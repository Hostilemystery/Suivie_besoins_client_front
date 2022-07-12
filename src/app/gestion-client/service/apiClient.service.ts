import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const url =environment.host+"client";
const prl =environment.host+"generatePdf";
const prl2 =environment.host+"pdf";
const srl =environment.host+"Service";
const prl3 =environment.host+"pdfs";
@Injectable({
  providedIn: 'root'
})
export class ApiServices {




  constructor(private http: HttpClient) { }

  postClient(data: any):Observable<any>{
    return this.http.post<any>(url,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //  getClient(){
  //   return this.http.get<any>("http://localhost:3000/clients/",).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  getClient():Observable<any>{
    return this.http.get<any>(url).pipe(map((res:any)=>{
      return res;
    }))
  }

  getPrin():Observable<any>{
    return this.http.get<any>(prl).pipe(map((res:any)=>{
      return res;
    }))
  }
  updateClient(data: any, id: number):Observable<any>{
    return this.http.put<any>(url+'/'+id , data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteClient(id: number):Observable<any>{
    return this.http.delete<any>(url+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  getClients(id:any):Observable<any>{
    return this.http.get<any>(url+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  getPrint(id:any):Observable<any>{
    return this.http.get<any>(prl2+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  getService():Observable<any>{
    return this.http.get<any>(srl).pipe(map((res:any)=>{
      return res;
    }))
  }
  Print(id:any):Observable<any>{
    return this.http.get<any>(prl3+'/'+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  // postClient(data: any){
  //   return this.http.post<any>("http://localhost:3000/clients/",data).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // getClient(){
  //   return this.http.get<any>("http://localhost:3000/clients/",).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // updateClient(data: any,id: number){
  //   return this.http.put<any>("http://localhost:3000/clients/"+id,data).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // deleteClient(id: number){
  //   return this.http.delete<any>("http://localhost:3000/clients/"+id).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
}
