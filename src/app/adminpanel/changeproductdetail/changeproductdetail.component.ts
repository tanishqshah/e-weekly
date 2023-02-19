import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-changeproductdetail',
  templateUrl: './changeproductdetail.component.html',
  styleUrls: ['./changeproductdetail.component.css']
})
export class ChangeproductdetailComponent {
  name: any;
  desc: any;
  price: any;
  image: any;
  data: any;
  category: any;
  proddet: any;
  product_id = this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute ,private http: HttpClient , public router:Router) { }
 
  ngOnInit() {
    this.http.get("http://localhost:8000/api/categories").subscribe((response: any) => {
      this.category = response;
      // console.log(response);
    })
    this.http.get("http://localhost:8000/api/products/" + this.product_id).subscribe((res: any) => {
      this.proddet = res;
      // console.log(res);
    })
  }
  originalData: any;
  updateProduct(data: any) {
    this.originalData = this.proddet;
    if (data.name === '') {
      data.name = this.originalData.name;
    }
    if (data.price === '') {
      data.price = this.originalData.price;
    }
    if (data.des === '') {
      data.des = this.originalData.description;
    }
    if (data.img === '') {
      data.img = this.originalData.image;
    }
    if (data.cid === '') {
      data.cid = this.originalData.cid;
    }
    this.data = {
      "name": data.name,
      "description": data.des,
      "price": data.price,
      "image": data.img,
      "cid":data.cid
    }
    console.log(this.data); 
    let headers={"Content-Type":"application/json"};
    this.http.put("http://localhost:8000/api/products/"+this.product_id,this.data,{headers}).subscribe((response:any)=>{
      console.log(response);
      this.router.navigate(['/admin/update']);
    })
  }
}
