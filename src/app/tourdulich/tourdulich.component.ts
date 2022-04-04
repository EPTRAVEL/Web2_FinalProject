import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourdulichService } from '../service/tourdulich.service';
@Component({
  selector: 'app-tourdulich',
  templateUrl: './tourdulich.component.html',
  styleUrls: ['./tourdulich.component.css']
})
export class TourdulichComponent implements OnInit {
  tour: any;
  errorMsg:string="";
  constructor(private _service: TourdulichService) { }

  ngOnInit(): void {
    this._service.getDataTour().subscribe(
      {
        next:(data)=>this.tour=data,
        error:(err)=>this.errorMsg=err.message
      })
  }

}
