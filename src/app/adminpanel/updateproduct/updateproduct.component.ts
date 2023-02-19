import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  products:any;
  id:any;
  constructor(private productsService:ProductService){}
  ngOnInit() {
    this.productsService.getProductswithoutuserid().subscribe((response: any)=>{
      this.products=response;
      console.log(response);
    })
    }
}
