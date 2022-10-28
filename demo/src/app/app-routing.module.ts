import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then((m) => m.ClasesModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
