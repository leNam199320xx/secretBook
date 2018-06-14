import { Component } from '@angular/core';
import { SbFriendService } from './friend.service';
import { SbAccountService } from '../../sb-account/account.service';
import { SbUserModel } from '../../../common/models/user.model';

@Component({
    selector: 'sb-friend',
    templateUrl: 'friend.html',
    styleUrls: ['friend.scss']
})
export class SbFriendComponent {
    friends: SbUserModel[];
    constructor(private friendService: SbFriendService, private accountService: SbAccountService) {
        if (this.accountService.me && this.accountService.me.id) {
            this.friendService.getFriends(this.accountService.me.id).subscribe(res => {
                this.friends = res;
            });
        }
    }

    openChatbox() {
    }
}
