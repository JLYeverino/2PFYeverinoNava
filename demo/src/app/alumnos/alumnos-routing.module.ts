import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmAlumnoComponent } from './components/abm-alumno/abm-alumno.component';

const routes: Routes = [
  {path: 'lista', component: AbmAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
