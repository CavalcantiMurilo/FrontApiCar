import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../service/car.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ICar} from "../../model/ICar";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  btnText: string = "Atualizar";
  headerText: string = "Atualização de dados"

  form: FormGroup;
  car!: ICar;

  constructor(private formBuilder: FormBuilder, private service: CarService, private snackBar: MatSnackBar, private router: Router) {
    this.form = this.formBuilder.group({
      idCar:[null],
      brandCar: ['', [Validators.required]],
      modelCar: ['', [Validators.required]],
      yearCar: ['', [Validators.required]],
      colorCar: ['', [Validators.required]],
    })
  }
}
