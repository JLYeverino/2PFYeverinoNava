import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AbmCursoComponent } from './components/abm-curso/abm-curso.component';
import { DialogCursoComponent } from './components/dialog-curso/dialog-curso.component';
import { MaterialModule } from '../material.module';
import { CursoService } from './services/curso.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AbmCursoComponent,
    DialogCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    CursoService
  ]
})
export class CursosModule { }
