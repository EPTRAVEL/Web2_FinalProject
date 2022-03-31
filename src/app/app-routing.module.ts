import { ThongtinComponent } from './thongtin/thongtin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';

const routes: Routes = [
  {
    path: 'dangky',
    component: DangKyComponent,
  },
  {
    path: 'thongtin',
    component: ThongtinComponent,
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