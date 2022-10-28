import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {Alumno} from 'src/app/models/alumno';
import {AlumnoService} from 'src/app/alumnos/services/alumno.service';
import {DialogAlumnoComponent} from '../dialog-alumno/dialog-alumno.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-abm-alumno',
  templateUrl: './abm-alumno.component.html',
  styleUrls: ['./abm-alumno.component.css']
})
export class AbmAlumnoComponent implements OnInit {
  ELEMENT_DATA = new MatTableDataSource<Alumno>()
  displayedColumns: string[] = ['nombre','edad','telefono','email','edit','delete'];

  constructor(
    private dialog: MatDialog,
    private alumnoService: AlumnoService
    ) { }

  ngOnInit(): void {
    this.getStudentsInformation();
    // this.ELEMENT_DATA.data = this.dataInicial
  }
  getStudentsInformation(){
    this.alumnoService.obtenerAlumnos()
      .subscribe((res)=>{
        this.ELEMENT_DATA.data = res;
      })
  }
  openDialog(action:string,obj:any) {
    obj.action = action;
    const dialog = this.dialog.open(DialogAlumnoComponent, {
      width: '45%',
      height: '45%',
      panelClass: 'custom-modalbox',
      data:obj,
    });
    dialog.afterClosed().subscribe(result => {
      
      if(result.event == 'Guardar'){
        console.log(result.data);
        this.alumnoService.addRowData(result.data);
      }
      else if(result.event == 'Editar'){
        console.log(result.data);
        this.alumnoService.updateRowData(result.data);
      }
    });
  }

  eliminarAlumno(id: number){
    this.alumnoService.delete(id);
  }
}
