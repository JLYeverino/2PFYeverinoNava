import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../../models/cursos';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular',
      profesor: 'Keven',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      clases: 20
    },
    {
      id: 2,
      nombre: 'Angular',
      profesor: 'Fernando',
      fechaInicio: new Date(2022, 2, 1),
      fechaFin: new Date(2022, 3, 30),
      clases: 17
    },
    {
      id: 3,
      nombre: 'ReactJS',
      profesor: 'Arturo',
      fechaInicio: new Date(2022, 1, 1),
      fechaFin: new Date(2022, 3, 28),
      clases: 30
    },
    {
      id: 4,
      nombre: 'VueJS',
      profesor: 'Lautaro',
      fechaInicio: new Date(2022, 5, 1),
      fechaFin: new Date(2022, 6, 30),
      clases: 25
    }
  ];
  private cursosSubject: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenercursos(): Observable<Curso[]>{
    return this.cursosSubject.asObservable();
  }
  addRowData(row_obj:any){
    let last:any = this.cursos[this.cursos.length-1];
    this.cursos.push({
      id: this.cursos.length > 0 ? last.id+1 : 1,
      nombre: row_obj.nombre,
      profesor: row_obj.profesor,
      fechaInicio: row_obj.fechaInicio,
      fechaFin: row_obj.fechaFin,
      clases: row_obj.clases
    });
    this.cursosSubject.next(this.cursos);
    console.log(this.cursos);
  }

  updateRowData(row_obj:any){
    this.cursos = this.cursos.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.nombre = row_obj.nombre;
        value.profesor = row_obj.profesor;
        value.fechaInicio = row_obj.fechaInicio;
        value.fechaFin = row_obj.fechaFin;
        value.clases = row_obj.clases;
      }
      console.log(this.cursos);
      return true;
      // this.cursosSubject.next(this.cursos);
    });
  }

  delete(id: number) {
    let position = this.cursos.findIndex(curso => curso.id == id)
    this.cursos.splice(position, 1)
    console.log(this.cursos)
    this.cursosSubject.next(this.cursos);
  }
}
