import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICar} from "../../model/ICar";
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.css'
})
export class UpdateDialogComponent implements OnInit{

  form: FormGroup;
  car!: ICar;

  ngOnInit() {

  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICar, public dialogRef: MatDialogRef<UpdateDialogComponent>, private formBuilder: FormBuilder, private route: ActivatedRoute, private carService: CarService) {
    this.form = this.formBuilder.group({
      idCar:[null],
      brandCar: ['', [Validators.required]],
      modelCar: ['', [Validators.required]],
      yearCar: ['', [Validators.required]],
      colorCar: ['', [Validators.required]],
    })
  }
  cancel(): void {
    this.dialogRef.close();
  }

  // @ts-ignore
  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Preencha o campo';
    }
  }
}
