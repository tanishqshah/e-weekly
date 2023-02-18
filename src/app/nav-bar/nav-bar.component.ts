import { Component, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [
    './nav-bar.component.css',
    '../auth-form/auth-form.component.css',
  ],
})
export class NavBarComponent {
  @Output() newsEvent = new EventEmitter<boolean>();
  @Output() navLinkEvent = new EventEmitter<string>();

  activeClass: boolean = false;
  isLoggedIn = false;
  admin = false;
  cart = false;

  constructor(public store: StoreService, private router: Router) {}

  navClick() {
    this.newsEvent.emit(true);
  }
  navNews(cat: string) {
    this.store.category = cat;
    console.log(this.store.category);
    this.navLinkEvent.emit('news');
    this.router.navigate(['main/blog']);
  }
  navAbout() {
    this.navLinkEvent.emit('about');
    this.router.navigate(['main/about']);
  }
  navPhoto() {
    this.navLinkEvent.emit('photo');
    this.router.navigate(['main/photo']);
  }
  navLog() {
    this.navLinkEvent.emit('log');
    this.router.navigate(['main/auth']);
  }
  navProduct() {
    this.navLinkEvent.emit('product');
    this.router.navigate(['main/product']);
  }
  navCart() {
    this.navLinkEvent.emit('cart');
    this.router.navigate(['main/cart']);
  }
  navAdmin() {
    this.navLinkEvent.emit('admin');
    this.router.navigate(['main/admin']);
  }
  
  ngOnInit(blog: any) {
    this.activeClass = false;
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user') != null) {
      this.isLoggedIn = true;
      this.admin = false;
      this.cart = true;
    }
    if (localStorage.getItem('user') == 'admin@admin.com') {
      this.isLoggedIn = true;
      this.admin = true;
    }
    if (localStorage.getItem('user') == null) {
      this.isLoggedIn = false;
    }
  }

  toggleForm() {
    this.activeClass = !this.activeClass;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.admin = false;
    this.cart=false;
    this.navLinkEvent.emit('news');
    this.router.navigate(['main/blog']);
    alert('You just logged out');
  }
}
