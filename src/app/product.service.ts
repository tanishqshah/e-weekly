import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  

  getProducts(id:any)
  {
    return this.http.get("http://localhost:8000/api/productswithcart/"+id);
  }

  getProductswithoutuserid() {
    return this.http.get("http://localhost:8000/api/products");
  }
 
  addToCart(data:any)
  {
    let headers={"Content-Type":"application/json"};
    return this.http.post("http://localhost:8000/api/cart/add",data,{headers});
  }

  removeFromCart(userid:any,productid:any)
  {
    return this.http.delete(`http://localhost:8000/api/removefromcart/${userid}/${productid}`);
  }

  getCartProducts(userid:any)
  { 
    return this.http.get(`http://localhost:8000/api/cart/${userid}`);
  }

  updateCart(data:any,id:number)
  {
    let headers={"Content-Type":"application/json"};
    return this.http.put("http://localhost:8000/api/cart/update/"+id,data,{headers});
  }


}
