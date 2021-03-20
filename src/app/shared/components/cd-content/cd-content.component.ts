import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cd-content',
  templateUrl: './cd-content.component.html',
  styleUrls: ['./cd-content.component.scss']
})
export class CdContentComponent {

  @Input() title: string;
  @Input() content: string;

  constructor() { }

}
