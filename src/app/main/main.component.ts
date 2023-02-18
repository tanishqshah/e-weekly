import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  ngOnInit(){

  }
  refresh(eve:any){
    console.log("called");
    this.ngOnInit();
  }
}
