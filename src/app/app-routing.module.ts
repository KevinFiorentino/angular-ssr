import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'pulse',
    loadChildren: () => import('./pulse/pulse.module').then(m => m.PulseModule),
  },
  {
    path: 'the-wall',
    loadChildren: () => import('./the-wall/the-wall.module').then(m => m.TheWallModule),
  },
  {
    path: 'the-dark-side-of-the-moon',
    loadChildren: () => import('./dark-side/dark-side.module').then(m => m.DarkSideModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
