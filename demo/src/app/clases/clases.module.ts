import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { AbmClaseComponent } from './components/abm-clase/abm-clase.component';
import { DialogClaseComponent } from './components/dialog-clase/dialog-clase.component';
import { MaterialModule } from '../material.module';
import { ClaseService } from './services/clase.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AbmClaseComponent,
    DialogClaseComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClasesModule { }
