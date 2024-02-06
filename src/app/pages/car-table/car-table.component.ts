import { Component } from '@angular/core';
import {FormsComponent} from "../../shared/forms/forms.component";
import { Car } from '../../model/car';
import { CarService } from '../../service/car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicial',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  btnText: string = "Cadastrar"

  carData: Observable<Car[]>;

  columnsToDisplay: string[] = ['id', 'brand', 'model', 'year', 'color', 'actions'];

 constructor(private carService: CarService){

  this.carData = this.carService.list();
 }

  protected readonly console = console;
}
