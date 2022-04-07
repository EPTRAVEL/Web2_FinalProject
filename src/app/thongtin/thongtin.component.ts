import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css']
})
export class ThongtinComponent implements OnInit {
  numnl: number=1;
  numte: number=0;
  numtn: number=0;
  numeb: number=0;
  constructor() { }

  ngOnInit(): void {
  }
  addnl(){
    if(this.numnl<10){
      this.numnl++;
    }
  }
  addte(){
    if(this.numte<10){
      this.numte++;
    }
  }
  addtn(){
    if(this.numtn<10){
      this.numtn++;
    }
  }
  addeb(){
    if(this.numeb<10){
      this.numeb++;
    }
  }
  minusnl(){
    if(this.numnl>0){
      this.numnl--;
    }
  }
  minuste(){
    if(this.numte>0){
      this.numte--;
    }
  }
  minustn(){
    if(this.numtn>0){
      this.numtn--;
    }
  }
  minuseb(){
    if(this.numeb>0){
      this.numeb--;
    }
  }
}
