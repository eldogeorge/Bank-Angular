import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  data="happy banking with us"
  pacdata="Enter your Account Number"

  login(a:any){
    console.log(a.value);
    
    alert('login clicked')
  }
  acnochange(event:any){//event type is any type (like string int) event is fixed
    console.log(event.target.value);
    
  }
}
