import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cd-picture',
  templateUrl: './cd-picture.component.html',
  styleUrls: ['./cd-picture.component.scss']
})
export class CdPictureComponent {

  @Input() image: string;

  constructor() { }

}
