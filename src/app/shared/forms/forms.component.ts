import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../service/car.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  @Input() btnText!: string;

  form: FormGroup;
  date = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder, private service: CarService, private snackBar: MatSnackBar, private router: Router) {
    this.form = this.formBuilder.group({
      idCar:[null],
      brandCar: ['', [Validators.required, Validators.maxLength(30)]],
      modelCar: ['', [Validators.required, Validators.maxLength(30)]],
      yearCar: ['', [Validators.required, Validators.minLength(4), Validators.max(this.date + 1)]],
      colorCar: ['', [Validators.required, Validators.maxLength(30)]],
    })
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
    this.router.navigate(['/'])

  }

  result(message: string){
    this.snackBar.open(message, '', {duration: 5000});
  }

}
