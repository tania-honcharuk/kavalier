import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuitesComponent } from './suites.component';

const routes: Routes = [
  {
      path: '/:room.title',
      component: SuitesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuitesRoutingModule { }