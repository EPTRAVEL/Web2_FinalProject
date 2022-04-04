import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  heart : String = 'bi-heart';
  person : String = 'bi-person';
  hidden : String = 'hidden';
  ngOnInit(): void {
  }
  changeHeart(){
    if(this.heart=="bi-heart"){
      this.heart="bi-heart-fill"
    }
    else{ 
      this.heart="bi-heart"
    }
  }
  changePerson(){
    if(this.person=="bi-person"){
      this.person="bi-person-fill"
    }
    else{ 
      this.person="bi-person"
    }
  }
  changeHidden(){
    if(this.hidden=="hidden"){
      this.hidden=""
    }
    else{ 
      this.hidden="hidden"
    }
  }
}
