import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btnHeart: string = 'bi-heart';
  btnPerson: string = 'bi-person';
  hidden: string = 'hidden';
  hidden_dm: string='hidden_dm'

  constructor() { }

  ngOnInit(): void {
  }

  changeHeart(){
    if(this.btnHeart=='bi-heart')
    {
      this.btnHeart = 'bi-heart-fill';
    }
    else{
      this.btnHeart='bi-heart'
    }
  }
  changePerson(){
    if(this.btnPerson=='bi-person')
    {
      this.btnPerson = 'bi-person-fill';
    }
    else{
      this.btnPerson='bi-person'
    }
  }
  changeHidden(){
    if(this.hidden=='hidden')
    {
      this.hidden = '';
    }
    else{
      this.hidden='hidden'
    }
  }

  changeHidden_dm(){
    if(this.hidden_dm=='hidden_dm'){
      this.hidden_dm = 'hidden'
    }
  }
  changeDefault(){
    this.hidden_dm = 'hidden_dm'
  }
}
