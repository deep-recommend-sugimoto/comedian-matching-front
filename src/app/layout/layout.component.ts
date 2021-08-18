import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { NotificationService } from '../states/notification'
import { UiQuery } from '../states/ui'
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
    subscriptions: Subscription[] = []
    isVisibleHeaders$ = this.uiQuery.isVisibleHeaders$

    constructor(private readonly uiQuery: UiQuery, private readonly notificationService: NotificationService) {}

    ngOnInit(): void {
        if (location.pathname !== 'sign-in' && location.pathname !== 'sign-up') {
            this.subscriptions.push(this.notificationService.getNotifications().subscribe())
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe())
    }
}
