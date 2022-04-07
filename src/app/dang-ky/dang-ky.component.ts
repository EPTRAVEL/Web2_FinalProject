import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../Checkformat/check.validator';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  public regForm: FormGroup = this._formBuilder.group({
    hoTen: ['Nguyễn Văn A', [Validators.required,Validators.minLength(3), customValidator]],
    // gTinh: ['ngdakhoa@gmail.com', [Validators.required,Validators.email]],
    ngaySinh: [10/10/2001],
    diDong: ['0326123397', [ Validators.required,
      Validators.pattern("[- +()0-9]+"),
      Validators.minLength(10), Validators.maxLength(10)]],
    cMND:['352588958', [ Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    ngayCap:[''],
    email:['ngdakhoa@gmail.com', [ Validators.required, Validators.email]],
    diaChi:['115 Đinh Chiến Thắng', [ Validators.required]],
    pass:['',[ Validators.required]],
    confirmPass:[''],
  }, {validators: [passwordValidator]})
  // })
  constructor(private _formBuilder: FormBuilder) { }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit(): void {
  }

}
