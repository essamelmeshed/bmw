export class AddUser {

    firstName: string = null;
    lastName: string = null;
    password:  string = null;
    email:  string = null;
    mobile: string = "01140687118";
    role: string = "admin";
    branchId:string= null;
  
    userPermissions: permissin[] = [];
}

export class permissin {


    pageId:any []= [];
    insert:boolean=false;
    update: boolean=false;
    delete: boolean=false;//string
    retrieve: boolean=false;
    navigate: boolean=false;
   

}




export interface Lookup {
    valueKey: string;
    descr: string;
};