import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/shared/admin-service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  constructor(private adminservice: adminService) { }

  pageName: string = null;
  pageDesc: string = null;
  pageRoute: string = null;
  message: string = "";

addPage(){


    const jsonDataRequest = {
      name: this.pageName,
      description: this.pageDesc,
      route: this.pageRoute,
    };

    
    this.adminservice.postNewItem("http://159.65.65.111:3001/api/page/", jsonDataRequest)
      .subscribe(res => {
        console.log("res", res)
        if(res.message!=null && res.message!=undefined){
          this.message = res.message
         console.log("message is : ",this.message)
          
        }
        
      },
        err => {
          console.log(err);
        }
      );



  }





  ngOnInit() {
  }

}
