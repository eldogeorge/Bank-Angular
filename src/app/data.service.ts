import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // sdata="hello hi"

  //api request
  constructor(private http:HttpClient){ }
  // smethod(){
  //   alert("service method")
  // }

  //api to server register
  register(acno:any,uname:any,psw:any){//:. asynchronous
    const bodyData={
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/register',bodyData)//asynchronous 
  }


  //API TO SERVER LOGIN
  login(acno:any,psw:any){
    const bodyData={
      acno,
      psw
    }
    return this.http.post('http://localhost:3000/login',bodyData)
  }
}


