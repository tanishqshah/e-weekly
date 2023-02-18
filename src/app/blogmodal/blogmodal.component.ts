import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blogmodal',
  templateUrl: './blogmodal.component.html',
  styleUrls: ['./blogmodal.component.scss']
})
export class BlogmodalComponent {
  @Input() data:any;
}
