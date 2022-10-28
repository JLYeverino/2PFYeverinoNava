import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmCursoComponent } from './components/abm-curso/abm-curso.component';

const routes: Routes = [
  {path: 'lista', component: AbmCursoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
