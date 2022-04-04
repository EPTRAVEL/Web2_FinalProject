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

}
