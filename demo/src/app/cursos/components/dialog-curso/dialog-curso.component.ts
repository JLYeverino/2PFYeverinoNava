import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Curso{
  id: number;
  nombre: string;
  profesor: string;
  fechaInicio: Date;
  fechaFin: Date;
  clases: number;
}

@Component({
  selector: 'app-dialog-curso',
  templateUrl: './dialog-curso.component.html',
  styleUrls: ['./dialog-curso.component.css']
})
export class DialogCursoComponent implements OnInit {
  action?:string;
  local_data:any;
  formCurso: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogCursoComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Curso
  ) { 
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.formCurso = fb.group({
      nombre: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      profesor: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      clases: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl()
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
