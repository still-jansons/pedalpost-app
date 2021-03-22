import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Pedalpost';
    user = {
        name: '',
        email: ''
    };

    constructor(
        private https: HttpService
    ) { }

    ngOnInit(): void {
        this.https.get('web/getLoggedUser', {}).toPromise().then((user: any) => {
            this.user = user;
        }).catch( () =>
            console.log('No user found')
        );
    }

    logout(): void {
        window.location.replace('logout');
    }
}
