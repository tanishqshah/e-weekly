import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users: any;
  deleteUser: boolean = true;
  searchText:string="";
  signin = false;
  constructor(private http: HttpClient){

  }
  ngOnInit(){
   this.callFunc();

  }

  callFunc(){
    this.http.get('http://localhost:3000/users/getUser').subscribe((res)=>{
      this.users = res;
      console.log(this.users)
    })
  }

  delete(email: string){
    let body = {"email":email};
    this.http.post('http://localhost:3000/users/deleteUser',body).subscribe((res)=>{
      // this.users = res;
      // console.log(res);
      this.callFunc()
    })
  }
  
}


