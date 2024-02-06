import { Component } from '@angular/core';
import {FormsComponent} from "../../shared/forms/forms.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  btnText: string = "Cadastrar";
  headerText: string = "Cadastro";
}
