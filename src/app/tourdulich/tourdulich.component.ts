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
  tour2: any;
  errorMsg: string = "";
  selectedTour: any;
  value: string[] = [];

  quocgia: string = "";
  khuvuc: string = "";
  noikhoihanh: string = "";
  diemden: string = "";
  thoigian: string = "";
  public condiForm: FormGroup = this._formBuilder.group({
    quocgia: [''],
    khuvuc: [''],
    noikhoihanh: [''],
    diemden: [''],
    thoigian: [''],
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

  onSubmit(form: any) {
    let params = new URLSearchParams(document.location.search)
    let name = params.get("quocgia")
  }

  onChangeSapXep(Option: any) {
    switch (Option.value) {
      case "thapcao": {
        this.tour.sort((a: any, b: any) => {
          return a.giatiennguoilon - b.giatiennguoilon;
        })
        break;
      }
      case "caothap": {
        this.tour.sort((a: any, b: any) => {
          return b.giatiennguoilon - a.giatiennguoilon;
        })
        break;
      }
      case "ggcaothap": {
        this.tour.sort((a: any, b: any) => {
          return b.giatiennguoilon * (b.giamgia / 100) - a.giatiennguoilon * (a.giamgia / 100);
        })
        break;
      }
      default: {
        this.getDataTour()
        break;
      }
    }
    console.log();
  }

  navigateType(type: string): void {
    this._router.navigateByUrl(`/dog?type=${type}`);
  }


  DatNgay() {
    alert('xử lý đặt ngay')
  }
  getDataTour() {
    this._service.getDataTour().subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
  }
  XuLyYeuThich() {
    alert("Xử lý yêu thích")
  }

  onSelect(data: any): void {
    // console.log(data)
    this._router.navigate(['/tourdulich', data.ma_tour])
  }
}
