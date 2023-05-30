import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private rout:Router)//Dependency Injection
  {
    
  }
  ngOnInit(): void {

  }

  create(){
    var ano=this.ano
    console.log(ano);
    console.log(this.uname);
    console.log(this.ps);
    console.log(this.cps);
    this.rout.navigateByUrl('home')//Redirection  In Angular

    
    
    
  }

}
