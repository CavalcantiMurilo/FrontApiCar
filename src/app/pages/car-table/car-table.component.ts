import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormsComponent} from "../../shared/forms/forms.component";
import { ICar } from '../../model/ICar';
import { CarService } from '../../service/car.service';
import { Observable } from 'rxjs';
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {UpdateDialogComponent} from "../../shared/update-dialog/update-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {RegisterDialogComponent} from "../../shared/register-dialog/register-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-carTable',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  btnText: string = "Cadastrar";

  carData: Observable<ICar[]>;

  columnsToDisplay: string[] = ['id', 'brand', 'model', 'year', 'color', 'actions'];

  form = '';

 constructor(private carService: CarService, private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router){

  this.carData = this.carService.list();
 }

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  openDialog(id: number): void {

    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: id
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

  onDelete(id:number){
    this.carService.delete(id).subscribe(item => this.result("Carro deletado com sucesso!"), error => this.result("Erro ao deletar carro!"));
    setTimeout(() => this.carService.reloadPage(), 1000);
  }

  result(message: string){
    this.snackBar.open(message, '', {duration: 5000});
  }

  onEdit(id: number){
    this.openDialog(id);
    const idCar: number = id;
  }

  outsideEdit(car: ICar){
    this.router.navigate([`update/${car.idCar}`])
  }

  filter(e: Event){
   console.log(this.form)
  }

}
