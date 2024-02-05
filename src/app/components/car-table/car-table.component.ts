import { Component } from '@angular/core';
import {FormsComponent} from "../forms/forms.component";

export interface CarAttributes {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
}

const carData: CarAttributes[] = [
  {id: 1, brand: 'Fiat', model: "Uno", year: 2010, color: "amarelo"},
  {id: 1, brand: 'Fiat', model: "Uno", year: 2010, color: "amarelo"},
  {id: 1, brand: 'Fiat', model: "Uno", year: 2010, color: "amarelo"},
  {id: 1, brand: 'Fiat', model: "Uno", year: 2010, color: "amarelo"}
];

@Component({
  selector: 'app-inicial',
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {
  btnText: string = "Cadastrar"


  columnsToDisplay: string[] = ['id', 'brand', 'model', 'year', 'color'];
  dataSource = carData
  protected readonly console = console;
}
