import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css',
    '../../auth-form/auth-form.component.css',]
})
export class AdminnavbarComponent {
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
  navUsers() {
    this.navLinkEvent.emit('news');
    this.router.navigate(['admin/userdet']);
  }
  navAdd() {
    this.navLinkEvent.emit('news');
    this.router.navigate(['admin/addproduct']);
  }
  navUp() {
    this.navLinkEvent.emit('news');
    this.router.navigate(['admin/update']);
  }
  navRev() {
    this.navLinkEvent.emit('news');
    this.router.navigate(['admin/review']);
  }
  navLog() {
    // this.navLinkEvent.emit('news');
    this.router.navigate(['admin/adminlogin']);
  }
  
  
  ngOnInit(blog: any) {
    this.activeClass = false;
    console.log(localStorage.getItem('admin'));
    if (localStorage.getItem('admin') != null) {
      this.isLoggedIn = true;
      this.admin = true;
      // this.cart = true;
    }
    if (localStorage.getItem('admin') == null) {
      this.isLoggedIn = false;
      this.cart = false;
    }
  }

  toggleForm() {
    this.activeClass = !this.activeClass;
  }

  logout() {
    localStorage.removeItem('admin');
    this.isLoggedIn = false;
    this.admin = false;
    this.router.navigate(['/admin/adminlogin']);
    alert('You just logged out');
  }
}
