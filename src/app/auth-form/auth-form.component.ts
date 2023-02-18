import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @Output() navRefresh = new EventEmitter<boolean>();
  name:string="";
  email:string="";
  contact:string="";
  password:string="";
  loginemail:string="";
  loginpassword:string="";
activeClass : boolean 
constructor(public http:HttpClient,public fb: FormBuilder,private router: Router){
this.activeClass = false
}

ngOnInit(){
  if(localStorage.getItem("user")!=null){
    this.router.navigate(['main/blog']);
  }
  if(localStorage.getItem("user")==null){
    // this.isLoggedIn = false;
  }
}

signupForm = this.fb.group({
  name: ['',[Validators.required,Validators.minLength(2)]],
  email: ['',[Validators.required,Validators.email]],
  contact: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  password: ['',[Validators.required,Validators.minLength(8)]]
})
loginForm = this.fb.group({
  loginemail: ['',[Validators.required,Validators.email]],
  loginpassword: ['',[Validators.required,Validators.minLength(8)]]
})
signup(){
  let body = {
    "name":this.name,
    "email":this.email,
    "contact":this.contact,
    "password":this.password,
    "preferences":"",
    "status":""
  }
  let headers = { "Content-Type": "application/json" };
  this.http.post("http://localhost:8000/api/users",body,{headers}).subscribe(res=>{
    console.log(res);
    this.name="";
    this.email="";
    this.contact="";
    this.password="";
    alert("form submitted")
    this.activeClass = false;
  })
}
login(){
  let body = {
    "email":this.loginemail,
    "password":this.loginpassword
  }
  this.http.post("http://localhost:8000/api/users/login",body).subscribe((res:any)=>{
    console.log(res);
    this.loginemail="";
    this.loginpassword = "";
    if (res.success == true) {
      this.setLocalStorage(res);
      // this.router.navigate(['main/blog']);
      window.location.reload();
      // this.router.navigate(['main/blog']);
      // this.router.navigate(['main/blog']);


    // alert("form submitted");
    }
    

    
   
  })
}
  // console.log(localStorage.setItem("user_id",res););
setLocalStorage(res:any){
  localStorage.setItem("user",JSON.stringify(res));
  console.log(res);
}
toggleForm(){
this.activeClass= !this.activeClass
}
}
