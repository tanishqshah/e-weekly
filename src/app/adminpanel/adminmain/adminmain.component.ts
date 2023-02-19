import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {
  loggedin = false;
  ngOnInit() {
      if(localStorage.getItem("admin")!=null){
        this.loggedin = true;
      }
      else{
        this.loggedin = false;
      }
     }
}


