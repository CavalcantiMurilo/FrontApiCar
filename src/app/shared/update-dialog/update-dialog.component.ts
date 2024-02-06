import { Component } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.css'
})
export class UpdateDialogComponent {

  constructor(public dialogRef: MatDialogRef<UpdateDialogComponent>) {
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
