import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-landing',
  templateUrl: './hero-landing.component.html',
  styleUrls: ['./hero-landing.component.css']
})
export class HeroLandingComponent {
  scrollDown(){
    window.scroll({
      top: 800,
      // left: 800,
      behavior: 'smooth'
    });
  }
}
