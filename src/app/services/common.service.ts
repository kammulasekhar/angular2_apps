import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

export interface RootData {
  userId: number
  id: number
  title: string
  body: string
}


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url:string = "https://jsonplaceholder.typicode.com/posts";

  subject = new Subject<RootData[]>();

  constructor(private http:HttpClient) {
    this.getPostData();
  }

  getPostData(){
     return this.http.get<RootData[]>(this.url)
  }

  getOneUser(id:number){
    return this.http.get<RootData>(this.url+"/"+id)
  }

  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmployees(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deteleEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updataEmployeeDetails(employee:any, id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id, employee)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
