import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  FooterChange: boolean = true;
  FooterMap: boolean = false;

  ChangeFunc() {
    this.FooterChange = false;
    this.FooterMap = true;
  }

  ChangeFunc2() {
    this.FooterChange = true;
    this.FooterMap = false;
  }

  showUp(): void {
    window.scroll(0, 0);
  }

  contactForm = this.fb.group({
    subject: ['', [Validators.required, Validators.minLength(2)]],
    desc: ['', [Validators.required]],
  });
  contactSubmit() {
    console.log(this.contactForm.value);
    let body = {
      subject: this.contactForm.value.subject,
      bod: this.contactForm.value.desc,
    };
    alert('form submitted');
    this.http
      .post('http://localhost:3000/users/adminMail', body)
      .subscribe((res) => {
        console.log(res);
      });
  }
  NavigateHome() {
    this.router.navigate(['entry']);
    this.showUp();
  }
  NavigateAbout() {
    this.router.navigate(['main/about']);
    this.showUp();
  }
  NavigateGallery() {
    this.router.navigate(['main/photo']);
    this.showUp();
  }
}
