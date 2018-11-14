import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {ImprintComponent} from './imprint/imprint.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'customer',
    component: CustomerListComponent
  },
  {
    path: 'imprint',
    component: ImprintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
