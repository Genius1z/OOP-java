import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IshowingComponent } from './Pages/ishowing/ishowing.component';
import { UpcommingshowingComponent } from './Pages/upcommingshowing/upcommingshowing.component';
import { SpecialComponent } from './Pages/special/special.component';

const routes: Routes = [
  { path: 'ishowing', component: IshowingComponent },
  { path: 'upcommingshowing', component: UpcommingshowingComponent },
  { path: 'special', component: SpecialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
