import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CarService} from "../../service/car.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.css'
})
export class RegisterDialogComponent {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
              private formBuilder: FormBuilder,
              private service: CarService,
              private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      brandCar: [null],
      modelCar: [null],
      yearCar: [null],
      colorCar: [null],
    })
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(item => this.result("Carro cadastrado com sucesso!"), error => this.result("Erro ao cadastrar carro!"));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  result(message: string){
    this.snackBar.open(message, '', {duration: 5000});
  }
}
