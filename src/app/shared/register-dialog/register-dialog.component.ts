import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.css'
})
export class RegisterDialogComponent {
  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>) {
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
