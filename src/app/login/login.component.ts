import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/shared/admin-service';
import { SessionManager } from '../shared/SessionManager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminservice: adminService) { }

  email: string = null;
  password: string = null;
  token: string = null;
  authorization: string = "authorized";


loadloginPage(){
  SessionManager.clearToken();
  console.log(SessionManager.getToken())

}

  login(): void {

    SessionManager.clearToken();

    const jsonDataRequest = {
      email: this.email,
      password: this.password,
    };

    
    this.adminservice.postService("http://159.65.65.111:3001/api/admin/login", jsonDataRequest)
      .subscribe(res => {
        //this.formDataResponse = res;
        console.log("res", res)
        if(res.token!=null && res.token!=undefined){
          this.token = res.token
          SessionManager.setToken(this.token);
          SessionManager.setAuthorization(this.authorization);
      
          window.location.href = '/dashboard'
        }
        
      },
        err => {
          console.log(err);
        }
      );



  }

  ngOnInit() {
    this.loadloginPage()
  }

}
