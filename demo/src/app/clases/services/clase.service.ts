import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Clase} from '../../models/clases';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private clases: Clase[] = [
    {
        id:1,
        nombre:'RxJS',
        duracion: 90,
        curso: 'Angular'
    },
    {
        id:2,
        nombre:'Modularización',
        duracion: 120,
        curso: 'Angular'
    },
    {
        id:3,
        nombre:'Scope',
        duracion: 80,
        curso: 'Javascript'
    }
]
private clasesSubject: BehaviorSubject<Clase[]>;
  constructor() { 
    this.clasesSubject = new BehaviorSubject<Clase[]>(this.clases);
  }

  obtenerClases(): Observable<Clase[]>{
    return this.clasesSubject.asObservable();
  }
  addRowData(row_obj:any){
    let last:any = this.clases[this.clases.length-1];
    this.clases.push({
      id: this.clases.length > 0 ? last.id+1 : 1,
      nombre: row_obj.nombre,
      duracion: row_obj.duracion,
      curso: row_obj.curso
    });
    this.clasesSubject.next(this.clases);
    console.log(this.clases);
  }

  updateRowData(row_obj:any){
    this.clases = this.clases.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.nombre = row_obj.nombre;
        value.duracion = row_obj.duracion;
        value.curso = row_obj.curso;
      }
      console.log(this.clases);
      return true;
      // this.clasesSubject.next(this.clases);
    });
  }

  delete(id: number) {
    let position = this.clases.findIndex(persona => persona.id == id)
    this.clases.splice(position, 1)
    console.log(this.clases)
    this.clasesSubject.next(this.clases);
  }
}