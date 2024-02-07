import { Component, input } from '@angular/core';
import {FormsComponent} from "../../shared/forms/forms.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {CarService} from "../../service/car.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  btnText: string = "Cadastrar";
  headerText: string = "Cadastro";

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: CarService,
              private snackBar: MatSnackBar) {

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

  result(message: string){
    this.snackBar.open(message, '', {duration: 5000});
  }

}
