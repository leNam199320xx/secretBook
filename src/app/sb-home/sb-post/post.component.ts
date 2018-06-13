import { Component } from '@angular/core';
import { SbPostService } from './post.service';

@Component({
    selector: 'sb-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.scss']
})
export class SbPostComponent {
    constructor(private postService: SbPostService) {
    }
}
