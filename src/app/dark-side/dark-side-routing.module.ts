import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DarkSideComponent } from './dark-side.component';

const routes: Routes = [
  { path: '', component: DarkSideComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DarkSideRoutingModule { }
