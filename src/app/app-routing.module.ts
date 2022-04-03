import { ThongtinComponent } from './thongtin/thongtin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { CactourkhuyenmaiComponent } from './cactourkhuyenmai/cactourkhuyenmai.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { NoidungtintucComponent } from './noidungtintuc/noidungtintuc.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TourdulichComponent } from './tourdulich/tourdulich.component';
import { LienheComponent } from './lienhe/lienhe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/trangchu',
    pathMatch: 'full',
  },
  {
    path: 'dangky',
    component: DangKyComponent,
  },
  {
    path: 'thongtin',
    component: ThongtinComponent,
  },
  {
    path: 'cactourkhuyenmai',
    component: CactourkhuyenmaiComponent,
  },
  {
    path: 'khuyenmai',
    component: KhuyenmaiComponent,
  },
  {
    path: 'noidungtintuc',
    component: NoidungtintucComponent,
  },
  {
    path: 'thanhtoan',
    component: ThanhtoanComponent,
  },
  {
    path: 'tintuc',
    component: TintucComponent,
  },
  {
    path: 'trangchu',
    component: TrangchuComponent,
  },
  {
    path: 'tourdulich',
    component: TourdulichComponent,
  },
  {
    path: 'lienhe',
    component: LienheComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent = [
  DangKyComponent
]