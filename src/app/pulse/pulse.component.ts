import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulse',
  templateUrl: './pulse.component.html',
  styleUrls: ['./pulse.component.scss']
})
export class PulseComponent implements OnInit {

  public content = `
    <p>P·U·L·S·E es el tercer álbum en vivo de la banda británica de rock progresivo Pink Floyd y el cuarto doble. Se grabó entre el 17 de agosto y el 23 de octubre de 1994 durante el The Division Bell Tour.</p>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
