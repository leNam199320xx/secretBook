import { Injectable } from '@angular/core';
import { SbUserModel } from '../../../common/models/user.model';
import { Observable } from 'rxjs';
import { SbChatModel } from '../sb-chatbox/chat.model';

@Injectable()
export class SbFriendService {

    friends: SbUserModel[];
    friendsObservable: Observable<SbUserModel[]> = new Observable();
    chatObservable: Observable<SbChatModel> = new Observable();
    constructor() {
    }

    getFriends(_userId: string) {
        return this.friendsObservable;
    }

    getChat(_friendId: string) {
        return this.chatObservable;
    }
}
