import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: any;
  cart: any;
  user = JSON.parse(localStorage.getItem("user") || "");
  userid= this.user.user.id || 0;
  loggedin = false;
  navLinkEvent: any;
  router: any;
  constructor( private productService:ProductService){}
  ngOnInit() {
      // console.log(this.user);
      this.productService.getProducts(this.userid).subscribe((response: any) => {
        this.products = response.products;
        this.cart = response.cart;
        console.log(response);
      })
  }
  navCart() {
    this.navLinkEvent.emit('cart');
    this.router.navigate(['main/cart']);
  }
  
  checkInCart(product:any)
  {
    let cp=this.cart.find((p:any)=>{
      return p.pivot.user_id==this.userid && p.pivot.product_id===product.id;
    })
    if(cp===undefined)
    {
      return false;
    }
    return true;
  }


  addToCart(product:any)
  {
      let item={
        user_id:this.userid,
        product_id:product.id,
        amount:product.price
      }

      this.productService.addToCart(item).subscribe((response:any)=>{
        console.log(response);
        if(response.success===true)
        {
          this.cart=response.cart;
        }
      })
  }

  removeFromCart(productid:any)
    {
      this.productService.removeFromCart(this.userid,productid).subscribe((response:any)=>{
        if(response.success===true)
        {
          this.cart=response.cart;
        }
      })
    }

  
}
