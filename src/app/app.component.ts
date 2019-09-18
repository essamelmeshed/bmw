import { Component,OnInit } from '@angular/core';
import { adminService } from './shared/admin-service';
import {LoginComponent} from '../app/login/login.component'
import { SessionManager } from './shared/SessionManager';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carsadmin';
  authorized: boolean;
  constructor( private adminservice: adminService) { }
  ngOnInit(): void {
  
this.authorized = this.isAuthorized();

  }
  isAuthorized(): boolean {
   
    if (SessionManager.getAuthorization()=="authorized") {
      console.log("authorizatin : ",SessionManager.getAuthorization())
      SessionManager.clearAuthorization()
      console.log("authorizatin : ",SessionManager.clearAuthorization())
      console.log("tokin is: ",SessionManager.getToken())
      return true;
      
    }
    console.log("tokin is: ",SessionManager.getToken())
    console.log("authorizatin is : ",SessionManager.getAuthorization())
    return false;
  }

}
