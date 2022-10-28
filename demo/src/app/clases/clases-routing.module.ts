import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmClaseComponent } from './components/abm-clase/abm-clase.component';

const routes: Routes = [
  {path: 'lista', component: AbmClaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
