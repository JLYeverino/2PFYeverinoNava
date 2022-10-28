import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        
        MatNativeDateModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSlideToggleModule,
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        
        MatNativeDateModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSlideToggleModule,
    ]
})
export class MaterialModule{}