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
    hoTen: ['Đăng khoa', [Validators.required, Validators.minLength(3), customValidator]],
    gTinh: ['ngdakhoa@gmail.com', [Validators.required,Validators.email]],
    ngaySinh: [''],
    diDong: [''],
    cMND:[''],
    ngayCap:[''],
    email:[''],
    diaChi:[''],
    pass:[''],
    confirmPass:[''],
  }, {validators: [passwordValidator]})
  // })
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
