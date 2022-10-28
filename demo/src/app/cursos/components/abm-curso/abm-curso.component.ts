import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {Curso} from 'src/app/models/cursos';
import {CursoService} from 'src/app/cursos/services/curso.service';
import {DialogCursoComponent} from '../dialog-curso/dialog-curso.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-abm-curso',
  templateUrl: './abm-curso.component.html',
  styleUrls: ['./abm-curso.component.css']
})
export class AbmCursoComponent implements OnInit {
  ELEMENT_DATA = new MatTableDataSource<Curso>()
  displayedColumns: string[] = ['nombre','profesor','fechaInicio','fechaFin','clases','edit','delete'];

  constructor(
    private dialog: MatDialog,
    private cursoService: CursoService
    ) { }

  ngOnInit(): void {
    this.getCursoInformation();
    // this.ELEMENT_DATA.data = this.dataInicial
  }
  getCursoInformation(){
    this.cursoService.obtenercursos()
      .subscribe((res)=>{
        this.ELEMENT_DATA.data = res;
      })
  }
  openDialog(action:string,obj:any) {
    obj.action = action;
    const dialog = this.dialog.open(DialogCursoComponent, {
      width: '45%',
      height: '45%',
      panelClass: 'custom-modalbox',
      data:obj,
    });
    dialog.afterClosed().subscribe(result => {
      
      if(result.event == 'Guardar'){
        console.log(result.data);
        this.cursoService.addRowData(result.data);
      }
      else if(result.event == 'Editar'){
        console.log(result.data);
        this.cursoService.updateRowData(result.data);
      }
    });
  }

  eliminarCurso(id: number){
    this.cursoService.delete(id);
  }
}
