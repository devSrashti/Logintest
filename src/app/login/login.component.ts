import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  email:string ='';
  password:string ='';

  constructor(private router: Router, private route: ActivatedRoute, public app: AppComponent) 
  {
    this.app.isloggedin = false;  
  }

  onclicklogin(){
  if(this.email == 'sara321@gmail.com' && this.password == '123@sara'){
  
  // localStorage.setItem('isloggedin','true');
  this.router.navigate(['/home']);



  }

  }

  

}
