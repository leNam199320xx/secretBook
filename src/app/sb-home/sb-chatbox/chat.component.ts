import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'sb-chatbox',
    templateUrl: 'chat.html',
    styleUrls: ['chat.scss']
})
export class SbChatboxComponent {
    dataFriend: any;
    constructor() { }
}
