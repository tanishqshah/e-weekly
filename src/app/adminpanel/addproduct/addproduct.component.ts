import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  name: any;
  desc: any;
  price: any;
  image: any;
  data: any;
  category: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get("http://localhost:8000/api/categories").subscribe((response: any) => {
      this.category = response;
      console.log(response);
    })
  }


  


  addProduct(data:any) {
    this.data = {
      "name": data.name,
      "description": data.des,
      "price": data.price,
      "image": data.img,
      "cid":data.cid
    }
    console.log(this.data); 
    let headers={"Content-Type":"application/json"};
    this.http.post("http://localhost:8000/api/products",this.data,{headers}).subscribe((response:any)=>{
        console.log(response);
    })
  }
}
