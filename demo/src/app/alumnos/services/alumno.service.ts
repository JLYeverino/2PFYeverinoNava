import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Alumno} from '../../models/alumno';

@Injectable()

export class AlumnoService {
  private alumnos: Alumno[] = [
    {
        id:1,
        nombre:'Jose',
        apellido: 'Yeverino',
        email: 'luisyn7@gmail.com',
        telefono: 8181861732,
        edad:22
    },
    {
        id:2,
        nombre:'Daniel',
        apellido: 'Martinez',
        email: 'dani@hotmail.com',
        telefono: 8767651425,
        edad:20
    },
    {
        id:3,
        nombre:'Tomas',
        apellido: 'Valdez',
        email: 't.valdez@gmail.com',
        telefono: 8181672456,
        edad:25
    }
]
private alumnosSubject: BehaviorSubject<Alumno[]>;
  constructor() { 
    this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.alumnosSubject.asObservable();
  }
  addRowData(row_obj:any){
    let last:any = this.alumnos[this.alumnos.length-1];
    this.alumnos.push({
      id: this.alumnos.length > 0 ? last.id+1 : 1,
      nombre: row_obj.nombre,
      apellido: row_obj.apellido,
      email: row_obj.email,
      telefono: row_obj.telefono,
      edad: row_obj.edad,
    });
    this.alumnosSubject.next(this.alumnos);
    console.log(this.alumnos);
  }

  updateRowData(row_obj:any){
    this.alumnos = this.alumnos.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.nombre = row_obj.nombre;
        value.apellido = row_obj.apellido;
        value.email = row_obj.email;
        value.telefono = row_obj.telefono;
        value.edad = row_obj.edad;
      }
      console.log(this.alumnos);
      return true;
      // this.alumnosSubject.next(this.alumnos);
    });
  }

  delete(id: number) {
    let position = this.alumnos.findIndex(persona => persona.id == id)
    this.alumnos.splice(position, 1)
    console.log(this.alumnos)
    this.alumnosSubject.next(this.alumnos);
  }
}