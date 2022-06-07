import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebrationsComponent } from './celebrations.component';

const routes: Routes = [
    {
        path: '',
        component: CelebrationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CelebrationsRoutingModule { }