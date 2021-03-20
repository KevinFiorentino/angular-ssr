import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheWallRoutingModule } from './the-wall-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { TheWallComponent } from './the-wall.component';

@NgModule({
  declarations: [
    TheWallComponent
  ],
  imports: [
    CommonModule,
    TheWallRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class TheWallModule { }
