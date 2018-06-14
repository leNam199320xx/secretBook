
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SbCommonMatModule } from '../common/modules/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SbNavComponent } from './sb-nav/sb-nav.component';
import { SbFooterComponent } from './sb-footer/footer.component';
import { SbLoginComponent } from './sb-account/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        SbNavComponent,
        SbFooterComponent,
        SbLoginComponent
    ],
    imports: [
        SbCommonMatModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
