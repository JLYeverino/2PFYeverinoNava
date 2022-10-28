import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Alumno{
  id:number
  nombre: string
  apellido: string
  email: string
  telefono: number
  edad: number
}
@Component({
  selector: 'app-dialog-alumno',
  templateUrl: './dialog-alumno.component.html',
  styleUrls: ['./dialog-alumno.component.css']
})
export class DialogAlumnoComponent implements OnInit {
  action?:string;
  local_data:any;
  formAlumno: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAlumnoComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) { 
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.formAlumno = fb.group({
      nombre: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      apellido: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9]\d*$/)]),
      edad: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.maxLength(2),Validators.minLength(2)]),
      email: new FormControl('', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    });
  }

  ngOnInit(): void {
  }
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
