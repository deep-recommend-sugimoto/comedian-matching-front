import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UserProps } from 'src/app/states/user/user.model'
@Component({
    selector: 'app-message-room-header-p',
    templateUrl: './message-room-header-p.component.html',
    styleUrls: ['./message-room-header-p.component.scss'],
})
export class MessageRoomHeaderPComponent implements OnInit {
    @Input() companion!: UserProps | null
    @Output() clickAccount: EventEmitter<number | undefined> = new EventEmitter<number | undefined>()

    constructor() {}

    ngOnInit(): void {}

    onClickAccount(userId: number | undefined): void {
        this.clickAccount.emit(userId)
    }
}
