import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ano:any
  uname:any
  ps:any
  cps:any

  constructor(private rout:Router,private ds:DataService)//Dependency Injection
  {
    
  }
  ngOnInit(): void {

  }
  //ngmodel method
  signup(){
    var acno=this.ano
    var uname=this.uname
    var psw=this.ps
    var cpsw=this.cps

    if(psw==cpsw){
      this.ds.register(acno,uname,psw).subscribe((result:any)=>{
        alert(result.message)
        this.rout.navigateByUrl('')//Redirection  In Angular  
      },
        result =>{
          alert(result.error.message)
        }
      )  
    }
    else{
      alert('password doesnt match')
    }
  }

  // create(){
  //   var ano=this.ano
  //   console.log(ano);
  //   console.log(this.uname);
  //   console.log(this.ps);
  //   console.log(this.cps);
  //  }

}
