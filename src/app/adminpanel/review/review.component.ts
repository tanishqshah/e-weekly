import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  rev: any;
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get("http://localhost:8000/api/user/review").subscribe((response: any) => {
      this.rev = response;
      console.log(response);
    })
  }
}
