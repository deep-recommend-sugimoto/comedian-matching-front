import { DeepRecommendSplashScreenService } from './general/services/splash-screen.service';
import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { latestUrlKey } from './general/utilities/local-strage';
import { accessTokenKey } from './general/utilities/api';
import { AuthenticationService } from './general/services/authentication.service';
import { SocketService } from './libs/socket/socket.service';

interface Window {
    onResumeApp(): void;
    onReturnApp(): void;
}
declare var window: Window;

@Component({
    selector: 'app-root',
    template: `<app-layout></app-layout>`,
})
export class AppComponent {
    currentRoute: string = '';

    constructor(
        private readonly router: Router,
        private readonly splash: DeepRecommendSplashScreenService,
        private readonly ngZone: NgZone,
        private readonly authenticationService: AuthenticationService,
        private readonly socket: SocketService
    ) {
        window.onResumeApp = () => {
            if (localStorage.getItem(accessTokenKey)) {
                this.ngZone.run(() => {
                    this._setLatestUrlInit();
                });
            }
        };

        window.onReturnApp = () => {
            this._setLatestUrlInit();
        };

        this.splash.init();

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
                localStorage.setItem(latestUrlKey, this.currentRoute);
            }
        });

        this._setLatestUrlInit();

        // this.authenticationService.getProfile().subscribe((user) => {
        //     this.socket.joinRooms(user.id);
        // });
    }

    private _setLatestUrlInit(): void {
        const latesrUrl = localStorage.getItem(latestUrlKey);
        if (latesrUrl) {
            this.router.navigate([latesrUrl]);
        }
    }
}
