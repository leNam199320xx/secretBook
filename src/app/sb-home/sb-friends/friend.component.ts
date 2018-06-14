import { Component } from '@angular/core';
import { SbFriendService } from './friend.service';
import { SbAccountService } from '../../sb-account/account.service';

@Component({
    selector: 'sb-friend',
    templateUrl: 'friend.html',
    styleUrls: ['friend.scss']
})
export class SbFriendComponent {
    constructor(private friendService: SbFriendService, private accountService: SbAccountService) {
        this.friendService.getFriends(this.accountService.me.id).subscribe(res => {

        });
    }

    openChatbox() {
    }
}
