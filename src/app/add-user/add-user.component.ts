import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/shared/admin-service';
import { AddUser, permissin, Lookup } from './add-user.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(private adminservice: adminService) { }

  pageNameArr: any = [];
  branchNameArr: any = [];
  br: Lookup[];
 newbranchid: any ;
 ind: any ;
 branchRes:any;
  message: string = "";
  dataModelObj: AddUser = new AddUser();
  permissinObj: permissin = new permissin();



  loadPagesList() {

    this.adminservice.getList("http://159.65.65.111:3001/api/page/")
      .subscribe(res => {
        console.log("res", res)
        if (res.message != null && res.message != undefined) {
          this.message = res.message
          console.log("message is : ", this.message)

          res.pages.forEach(p => {

            this.permissinObj.pageId.push(p._id)
            this.addField();

          });

          this.pageNameArr = this.permissinObj.pageId;
          console.log("pageNameArr : ", this.pageNameArr)
        }

      },
        err => {
          console.log(err);
        }
      );

  }

  selectbranch() {

   this.ind= this.branchNameArr.indexOf(this.dataModelObj.branchId);


    this.newbranchid=this.branchRes.branchs[this.ind]._id;

  }


  loadBranchesList() {

    this.adminservice.getList("http://159.65.65.111:3001/api/branch/")
      .subscribe(res => {
        console.log("res", res)
        this.branchRes=res;
        if (res.message != null && res.message != undefined) {
          this.message = res.message
          console.log("message is : ", this.message)

          res.branchs.forEach(b => {

            this.branchNameArr.push(b.name)

           
          });

          //  this.branchNameArr= this.dataModelObj.branchId;
          console.log("branchNameArr : ", this.branchNameArr)


        
        }

      },
        err => {
          console.log(err);
        }
      );

  }

  addUser() {


    const jsonDataRequest = 
    //this.dataModelObj;
{

  firstName: this.dataModelObj.firstName,
  lastName: this.dataModelObj.lastName,
  password:   this.dataModelObj.password,
  email:   this.dataModelObj.email,
  mobile:"01140687118",
  role:  "admin",
  branchId:this.newbranchid,
  userPermissions:this.dataModelObj.userPermissions
}

    this.adminservice.postNewItem("http://159.65.65.111:3001/api/admin/create/", jsonDataRequest)
      .subscribe(res => {
        console.log("res", res)
        if (res.message != null && res.message != undefined) {
          this.message = res.message
          console.log("message is : ", this.message)

        }

      },
        err => {
          console.log(err);
        }
      );



  }

  addField() {

    // this.dataModelObj.rcord.push(new xyz());
    this.dataModelObj.userPermissions.push(new permissin());
  }

  ngOnInit() {
    this.loadBranchesList()
    this.loadPagesList();
  }

}
