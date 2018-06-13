import { NgModule } from '@angular/core';
import { SbHomeComponent } from './home.component';
import { SbHomeRoutingModule } from './home.routing.module';
import { SbPostComponent } from './sb-post/post.component';
import { SbPostCreateComponent } from './sb-post-create/create.component';
import { SbPostService } from './sb-post/post.service';
import { SbCommonMatModule } from '../../common/modules/common.module';

@NgModule({
    declarations: [SbHomeComponent, SbPostComponent, SbPostCreateComponent],
    imports: [SbHomeRoutingModule, SbCommonMatModule],
    providers: [SbPostService]
})
export class SbHomeModule {
    constructor() {
        console.log('lazy load');
    }
}
