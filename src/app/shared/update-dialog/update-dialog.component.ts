import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICar} from "../../model/ICar";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {CarService} from "../../service/car.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.css'
})
export class UpdateDialogComponent implements OnInit{

  form: FormGroup;
  car!: ICar;

  ngOnInit() {
    this.findById(this.data);
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: number, public dialogRef: MatDialogRef<UpdateDialogComponent>, private formBuilder: FormBuilder, private route: ActivatedRoute, private carService: CarService, private router: Router, private snackBar: MatSnackBar) {
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

  findById(id:number){
    this.carService.listById(id).subscribe(item => this.form.patchValue(item))
  }

  // @ts-ignore
  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Preencha o campo';
    }//
  }

  onUpdate(car: ICar, id: number){
    this.carService.update(car, id).subscribe(item =>{ this.result("Carro atualizado com sucesso!"); this.router.navigate(['/']);}, error => this.result("Erro ao atualizar carro!"));
  }

  result(message: string){
    this.snackBar.open(message, '', {duration: 5000});
  }

}
