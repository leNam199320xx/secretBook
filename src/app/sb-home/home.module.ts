import { NgModule } from '@angular/core';
import { SbHomeComponent } from './home.component';
import { SbHomeRoutingModule } from './home.routing.module';
import { SbPostComponent } from './sb-post/post.component';
import { SbPostCreateComponent } from './sb-post-create/create.component';
import { SbPostService } from './sb-post/post.service';
import { SbCommonMatModule } from '../../common/modules/common.module';
import { SbFriendComponent } from './sb-friends/friend.component';
import { SbChatboxComponent } from './sb-chatbox/chat.component';
import { SbFriendService } from './sb-friends/friend.service';

@NgModule({
    declarations: [SbHomeComponent, SbPostComponent, SbPostCreateComponent, SbFriendComponent, SbChatboxComponent],
    imports: [SbHomeRoutingModule, SbCommonMatModule],
    providers: [SbPostService, SbFriendService],
    entryComponents: [SbChatboxComponent]
})
export class SbHomeModule {
    constructor() {
        console.log('lazy load');
    }
}
