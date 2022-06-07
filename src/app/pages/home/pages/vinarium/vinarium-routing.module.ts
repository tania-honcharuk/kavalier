import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinariumComponent } from './vinarium.component';

const routes: Routes = [
    {
        path: '',
        component: VinariumComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VinariumRoutingModule { }