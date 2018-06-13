import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SbHomeComponent } from './home.component';


const routes: Routes = [
    {
        path: '',
        component: SbHomeComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class SbHomeRoutingModule { }
