import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent {
  users: any;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get("http://localhost:8000/api/users").subscribe((response: any) => {
      this.users = response;
      console.log(response);
    })
  }
}
