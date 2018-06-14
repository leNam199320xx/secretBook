import { Injectable } from '@angular/core';
import { SbUserModel } from '../../common/models/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SbAccountService {
    me: SbUserModel;
    meObservable: Observable<SbUserModel> = new Observable();
    meSubject: Subject<SbUserModel> = new Subject();
    constructor() {
        this.meSubject.subscribe(res => this.me = res);
        this.meObservable.subscribe(res => {
            this.meSubject.next(res);
        });
    }
    login(_username: string, _password: string) {
        return this.meObservable;
    }
    loginWithToken(_token: string) {
        return this.meObservable;
    }
}
