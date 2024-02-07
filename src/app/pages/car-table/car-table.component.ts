import {Component, EventEmitter, Output} from '@angular/core';
import {FormsComponent} from "../../shared/forms/forms.component";
import { Car } from '../../model/car';
import { CarService } from '../../service/car.service';
import { Observable } from 'rxjs';
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {UpdateDialogComponent} from "../../shared/update-dialog/update-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {RegisterDialogComponent} from "../../shared/register-dialog/register-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-inicial',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  btnText: string = "Cadastrar";



  carData: Observable<Car[]>;

  columnsToDisplay: string[] = ['id', 'brand', 'model', 'year', 'color', 'actions'];

 constructor(private carService: CarService, private dialog: MatDialog, private snackBar: MatSnackBar){

  this.carData = this.carService.list();
 }




  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {


    });
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {


    });
  }

}
