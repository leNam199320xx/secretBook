import { Component } from '@angular/core';
import { SbAccountService } from '../account.service';

@Component({
    selector: 'sb-login',
    templateUrl: 'login.html',
    styleUrls: ['login.scss']
})
export class SbLoginComponent {
    constructor(private accountService: SbAccountService) {
        this.accountService.login('user', 'pass');
    }
}
