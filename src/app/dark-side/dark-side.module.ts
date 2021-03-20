import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkSideRoutingModule } from './dark-side-routing.module';
import { MaterialModule } from '../material/material.module';
import { DarkSideComponent } from './dark-side.component';

@NgModule({
  declarations: [DarkSideComponent],
  imports: [
    CommonModule,
    DarkSideRoutingModule,
    MaterialModule
  ]
})
export class DarkSideModule { }
