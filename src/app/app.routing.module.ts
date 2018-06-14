import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SbLoginComponent } from './sb-account/login/login.component';


const routes: Routes = [
    {
        path: '',
        loadChildren: './sb-home/home.module#SbHomeModule'
    },
    {
        path: 'login',
        component: SbLoginComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
