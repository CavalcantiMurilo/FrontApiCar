import {Component, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CarService} from "../../service/car.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.css'
})
export class RegisterDialogComponent implements OnInit{

  form: FormGroup;
  date = new Date().getFullYear();



  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
              private formBuilder: FormBuilder,
              private service: CarService,
              private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      idCar:[null],
      brandCar: ['', [Validators.required, Validators.maxLength(30)]],
      modelCar: ['', [Validators.required, Validators.maxLength(30)]],
      yearCar: ['', [Validators.required, Validators.minLength(4), Validators.max(this.date + 1)]],
      colorCar: ['', [Validators.required, Validators.maxLength(30)]],
    })
  }

  ngOnInit() {

  }

  // @ts-ignore
  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Preencha o campo';
    }

    if (field?.hasError('max')) {
      return 'Ano não suportado';
    }

    if (field?.hasError('maxlength')) {
      return 'Excedeu o tamanho de caracteres';
    }
  }



  onSubmit(){
    if(this.form.invalid){
      return;
    }
    this.service.save(this.form.value).subscribe(item => this.result("Carro cadastrado com sucesso!"), error => this.result("Erro ao cadastrar carro!"));
    setTimeout(() => this.service.reloadPage(), 1000)

  }

  cancel(): void {
    this.dialogRef.close();
  }

  result(message: string){
    this.snackBar.open(message, '', {duration: 5000});
  }
}
