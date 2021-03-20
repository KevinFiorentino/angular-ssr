import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-side',
  templateUrl: './dark-side.component.html',
  styleUrls: ['./dark-side.component.scss']
})
export class DarkSideComponent implements OnInit {

  public content = `
    <p>The Dark Side of the Moon —en español: El lado oscuro de la luna— es un álbum conceptual, el octavo de estudio de la banda británica de rock progresivo Pink Floyd. Fue lanzado el 1 de marzo de 1973 en los Estados Unidos y el 24 de marzo del mismo año en el Reino Unido. Se estima que el álbum ha vendido más de 50 millones de copias mundialmente.</p>
    <p>La temática del álbum incluye el conflicto, la avaricia, el envejecimiento, el significado de la vida, el miedo a la muerte y la enfermedad mental, este último inspirado, en parte, por el deterioro mental de Barrett.</p>
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
