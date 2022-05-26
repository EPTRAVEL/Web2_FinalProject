import { TourdulichService } from './../service/tourdulich.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyenmai',
  templateUrl: './khuyenmai.component.html',
  styleUrls: ['./khuyenmai.component.css']
})
export class KhuyenmaiComponent implements OnInit {
  tour: any;
  tourKMTN: any;
  tourKMNN: any;

  errorMsg: string = "";


  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor(private _service: TourdulichService) { }

  ngOnInit(): void {
    this._service.getDataTour().subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
    //  this.tour.filter((obj) => {
    //   return obj.quocgia === "Tour du lịch nước ngoài";
    // });





    
  }

}
