import { Injectable } from '@angular/core';

@Injectable()
export class SbPostService {
    post: SbPostModel;
    postList: SbPostModel[] = [];
}

export class SbPostModel {
    imageUrl: string;
    text: string;
    url: string;
    createdDate: string;
}
