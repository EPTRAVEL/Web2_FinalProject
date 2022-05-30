import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DangnhapComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
}
