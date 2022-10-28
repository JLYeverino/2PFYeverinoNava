import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {Clase} from 'src/app/models/clases';
import {ClaseService} from 'src/app/clases/services/clase.service';
import {DialogClaseComponent} from '../dialog-clase/dialog-clase.component';

@Component({
  selector: 'app-abm-clase',
  templateUrl: './abm-clase.component.html',
  styleUrls: ['./abm-clase.component.css']
})
export class AbmClaseComponent implements OnInit {
  ELEMENT_DATA = new MatTableDataSource<Clase>()
  displayedColumns: string[] = ['nombre','duracion','curso','edit','delete'];
  constructor(
    private dialog: MatDialog,
    private claseService: ClaseService
  ) { }

  ngOnInit(): void {
    this.getClasesInformation();
  }

  getClasesInformation(){
    this.claseService.obtenerClases()
      .subscribe((res)=>{
        this.ELEMENT_DATA.data = res;
      })
  }
  openDialog(action:string,obj:any) {
    obj.action = action;
    const dialog = this.dialog.open(DialogClaseComponent, {
      width: '45%',
      height: '45%',
      panelClass: 'custom-modalbox',
      data:obj,
    });
    dialog.afterClosed().subscribe(result => {
      
      if(result.event == 'Guardar'){
        console.log(result.data);
        this.claseService.addRowData(result.data);
      }
      else if(result.event == 'Editar'){
        console.log(result.data);
        this.claseService.updateRowData(result.data);
      }
    });
  }

  eliminarClase(id: number){
    this.claseService.delete(id);
  }
}
