import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css'],
})
export class TrangchuComponent implements OnInit {
  slides = [
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
    { img: './assets/images/IMAGE/img_temp_500x350.png' },
 
  ];
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

  constructor() {}

  ngOnInit(): void {}
}
