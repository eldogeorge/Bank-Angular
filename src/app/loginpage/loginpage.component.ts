import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{
  data="happy banking with us"
  pacdata="Enter your Account Number"
  serviceData:any

  acno:any
  psw:any

  constructor(private rout:Router,private ds:DataService){}//Dependency Injection

  ngOnInit():void{
    // this.serviceData=this.ds.sdata
    // console.log(this.serviceData);
    // this.ds.smethod()
    
  }
  login(){
    // console.log(a.value);    
    // alert('login clicked')

    // console.log(this.acno);
    // console.log(this.psw);

    var acno=this.acno
    var psw=this.psw
    this.ds.login(acno,psw).subscribe((result:any)=>{
      alert(result.message)
      this.rout.navigateByUrl('home')//Redirection  In Angular

    },
      result=>{
        alert(result.error.message)
      }
    )
  }
  acnochange(event:any){//event type is any type (like string int) event is fixed
    console.log(event.target.value);
  }
}
