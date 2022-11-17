import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'iniciarSesion',
    loadChildren: () => import('../app/usuario/iniciar-sesion/iniciar-sesion-routing.module').then( m => m.IniciarSesionPageRoutingModule)
  },
  {
    path: '',
    redirectTo: 'iniciarSesion',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./usuario/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registrarUsuario',
    loadChildren: () => import('./usuario/registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
