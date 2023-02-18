import { Component,Output,EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-news-paper',
  templateUrl: './news-paper.component.html',
  styleUrls: ['./news-paper.component.scss']
})
export class NewsPaperComponent {
  
  showUp(): void {
    window.scroll(0,0);
  }
  constructor(private router: Router){

  }
  navClick(){
    
    this.router.navigate(['main'])
    this.showUp()
  }
  teamClick(){
    this.router.navigate(['main/about'])
    this.showUp()
  }
}
