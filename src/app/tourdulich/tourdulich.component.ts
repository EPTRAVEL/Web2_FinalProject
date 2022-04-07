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
  errorMsg: string = "";
  selectedTour: any;
  constructor(private _service: TourdulichService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._service.getDataTour().subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
    this._activatedRoute.paramMap.subscribe(
      (param) => {
        let ma_tour = param.get('ma_tour')
        if (ma_tour != null) {
          this.selectedTour = parseInt(ma_tour)
        }
      })

    }
    onSelect(data: any):void{
      // console.log(data)
      
      this._router.navigate(['/tourdulich', data.ma_tour])
    }
  }
