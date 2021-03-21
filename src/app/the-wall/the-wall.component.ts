import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-wall',
  templateUrl: './the-wall.component.html',
  styleUrls: ['./the-wall.component.scss']
})
export class TheWallComponent implements OnInit {

  public content = `
    <p>Este disco doble es un álbum conceptual que nos retrata la vida de una estrella ficticia del rock llamada Pink, basado en las vivencias del mismo Waters, convirtiéndolo así en una especie de álter ego antihéroe. Descrito por Roger Waters, Pink se reprime debido a los traumas que la vida le va deparando: la muerte de su padre en la Segunda Guerra Mundial, la sobreprotección materna, la opresión de la educación británica, los fracasos sentimentales, la presión de ser una figura famosa en el mundo de la música o su controvertido uso de drogas sumado al asma, entre otros, son convertidos por él en «ladrillos de un muro metafórico» que lo aísla, construido con el fin de protegerse del mundo y de la vida, pero que le conduce a un mundo de fantasía autodestructiva.</p>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
