import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AjustesService } from './services/ajustes.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'introduccion',
    pathMatch: 'full',
    canActivate: [AjustesService],
  },
  {
    path: 'pagina2',
    loadChildren: () =>
      import('./pagina2/pagina2.module').then((m) => m.Pagina2PageModule),
  },
  {
    path: 'pagina3',
    loadChildren: () =>
      import('./pagina3/pagina3.module').then((m) => m.Pagina3PageModule),
  },
  {
    path: 'introduccion',
    loadChildren: () =>
      import('./introduccion/introduccion.module').then(
        (m) => m.IntroduccionPageModule
      ),
    canActivate: [AjustesService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
