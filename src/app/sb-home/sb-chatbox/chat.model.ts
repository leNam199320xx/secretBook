export class SbChatModel {
    yourId: string;
    yourName: string;
    friendId: string;
    friendName: string;
    texts: SbChatTextModel[];
}

export class SbChatTextModel {
    sendId: string;
    value: string;
    date = new Date();
    time = this.date.getDay() + '/' + this.date.getMonth() + '/' + this.date.getFullYear();
}
