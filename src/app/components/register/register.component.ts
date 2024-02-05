import { Component } from '@angular/core';
import {FormsComponent} from "../forms/forms.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  btnText: string = "Cadastrar";
  headerText: string = "Cadastro"
}
