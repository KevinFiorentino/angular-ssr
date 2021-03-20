import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { CdContentComponent } from './components/cd-content/cd-content.component';
import { CdPictureComponent } from './components/cd-picture/cd-picture.component';

const COMPONENTS = [
  CdContentComponent,
  CdPictureComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class SharedModule { }
