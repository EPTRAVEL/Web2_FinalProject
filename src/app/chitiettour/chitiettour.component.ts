import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourdulichService } from '../service/tourdulich.service';

@Component({
  selector: 'app-chitiettour',
  templateUrl: './chitiettour.component.html',
  styleUrls: ['./chitiettour.component.css']
})
export class ChitiettourComponent implements OnInit {
  tour :any;
  selectedTour: any;
  constructor( private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (param)=>{
        
        let ma_tour = param.get('ma_tour');
        if (ma_tour !=null){
          this.selectedTour = ma_tour;
        }
      }
    )  

  }
    

}
