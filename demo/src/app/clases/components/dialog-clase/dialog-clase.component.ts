import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Clase{
  id: number;
  nombre: string;
  duracion: number;
  curso: string;
}

@Component({
  selector: 'app-dialog-clase',
  templateUrl: './dialog-clase.component.html',
  styleUrls: ['./dialog-clase.component.css']
})
export class DialogClaseComponent implements OnInit {
  action?:string;
  local_data:any;
  formClase: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogClaseComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Clase
  ) { 
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.formClase = fb.group({
      nombre: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      duracion: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.maxLength(4),Validators.minLength(2)]),
      curso: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')])
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
