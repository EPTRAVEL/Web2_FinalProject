import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RouterComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { CactourkhuyenmaiComponent } from './cactourkhuyenmai/cactourkhuyenmai.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { NoidungtintucComponent } from './noidungtintuc/noidungtintuc.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { TourdulichComponent } from './tourdulich/tourdulich.component';
import { CommonModule } from '@angular/common';

import { ChitiettourComponent } from './chitiettour/chitiettour.component';
import { YeuthichComponent } from './yeuthich/yeuthich.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DangKyComponent,
    HeaderComponent,
    RouterComponent,
    FooterComponent,
    TrangchuComponent,
    KhuyenmaiComponent,
    CactourkhuyenmaiComponent,
    TintucComponent,
    NoidungtintucComponent,
    ThanhtoanComponent,
    TourdulichComponent,
    ChitiettourComponent,
    YeuthichComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
