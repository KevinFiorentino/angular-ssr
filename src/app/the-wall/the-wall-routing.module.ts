import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TheWallComponent } from './the-wall.component';

const routes: Routes = [
  { path: '', component: TheWallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheWallRoutingModule { }
