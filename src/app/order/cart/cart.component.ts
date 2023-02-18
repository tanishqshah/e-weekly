import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: any;
  total_amount: any;
  total_quantity: any;
  user = JSON.parse(localStorage.getItem("user") || "");
  userid= this.user.user.id;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getCartProducts(this.userid).subscribe((response:any)=>{
      this.cart = response;
      console.log(response);
      this.calculatetotal(response);

    })
  }
  updateCart(index:number,sign:string)
  {
    if(sign==="plus")
    {
      this.cart[index].pivot.quantity+=1;
      
    }
    else 
    {
      this.cart[index].pivot.quantity-=1;
    }

    this.cart[index].pivot.amount=this.cart[index].pivot.quantity*this.cart[index].price;

    let body = {
      "quantity":this.cart[index].pivot.quantity,
      "amount":this.cart[index].pivot.amount
    }

    if(this.cart[index].pivot.quantity>0)
    {
      console.log("hel;");
      this.productService.updateCart(body,this.cart[index].pivot.id).subscribe((response)=>{
        console.log(response);
      })
    }
    else 
    {
      this.productService.removeFromCart(this.userid,this.cart[index].pivot.product_id).subscribe((response:any)=>{
        if(response.success===true)
        {
          this.cart=response.cart;
        }
      })
    }
    this.calculatetotal(this.cart);
// console.log(res)    
    
  }

  calculatetotal(products:any)
  {
    let totalamount=0;
    let totalquantity = 0;
    products.forEach((p:any)=>{
      totalamount += Number(p.pivot.amount);
      totalquantity += Number(p.pivot.quantity);
    })
    this.total_quantity=totalquantity
    this.total_amount = totalamount;

  }

}
