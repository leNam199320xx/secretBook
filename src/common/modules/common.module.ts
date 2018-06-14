import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBottomSheetModule,
    MatInputModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { SbAccountService } from '../../app/sb-account/account.service';
@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatBottomSheetModule,
        MatInputModule
    ],
    providers: [SbAccountService]
})
export class SbCommonMatModule {}
