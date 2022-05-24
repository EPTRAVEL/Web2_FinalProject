import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  value:string[] =[];

  public condiForm: FormGroup = this._formBuilder.group({
    quocgia: ['all'],
    khuvuc: ['all'],
    noikhoihanh: ['all'],
    diemden: ['all'],
    thoigian: ['all'], 
  })

  constructor(private _service: TourdulichService, private _router: Router, private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getDataTour()
    this._activatedRoute.paramMap.subscribe(
      (param) => {
        let ma_tour = param.get('ma_tour')
        if (ma_tour != null) {
          this.selectedTour = parseInt(ma_tour)
        }
      })

  }

  onSubmit(form: any){
    // var fullCondition = form.value.quocgia ;  
    var fullCondition = form.value.quocgia + "/" +form.value.khuvuc + "/"+ form.value.noikhoihanh + "/"+ form.value.diemden + "/"+ form.value.thoigian;  
   console.log(fullCondition)
    this._service.getDataTourWithCondition(fullCondition).subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
  }

  navigateType(type: string):void {
    this._router.navigateByUrl(`/dog?type=${type}`);
  }


getDataTour(){
  this._service.getDataTour().subscribe(
    {
      next: (data) => this.tour = data,
      error: (err) => this.errorMsg = err.message
    })
}

  onSelect(data: any): void {
    // console.log(data)

    this._router.navigate(['/tourdulich', data.ma_tour])
  }
}
