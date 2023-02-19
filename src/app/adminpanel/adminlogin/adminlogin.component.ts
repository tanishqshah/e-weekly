import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  @Output() navRefresh = new EventEmitter<boolean>();
  loginemail:string="";
  loginpassword: string = "";
  loggedin = false;
  activeClass : boolean 
  constructor(public http:HttpClient,public fb: FormBuilder,private router: Router){
    this.activeClass = false
  }

  loginForm = this.fb.group({
    loginemail: ['',[Validators.required,Validators.minLength(2)]],
    loginpassword: ['',[Validators.required,Validators.minLength(6)]]
  })
  login(){
    let body = {
      "username":this.loginemail,
      "password":this.loginpassword
    }
    this.http.post("http://localhost:8000/api/admin/login",body).subscribe((res:any)=>{
      console.log(res);
      this.loginemail="";
      this.loginpassword = "";
      if (res.success === true) {
        this.setLocalStorage(res);
        this.loggedin = true;
        
        this.router.navigate(['/admin/userdet']);
        // window.location.reload();
      // alert("form submitted");
      }     
    })
  }
  setLocalStorage(res:any){
    localStorage.setItem("admin",JSON.stringify(res));
    console.log(res);
  }
}
