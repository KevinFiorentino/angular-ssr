import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PulseRoutingModule } from './pulse-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PulseComponent } from './pulse.component';

@NgModule({
  declarations: [
    PulseComponent
  ],
  imports: [
    CommonModule,
    PulseRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PulseModule { }
