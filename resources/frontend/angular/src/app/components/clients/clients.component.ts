import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ClientFormDialogComponent } from './client-form/client-form-dialog.component';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {
    clients = [];
    gettingClients = false;

    showApiClient = {
        api_token: null,
        uuid: null
    };

    getClientsSubscription: Subscription;

    constructor(
        private dialog: MatDialog,
        private https: HttpService
    ) { }

    ngOnInit(): void {
        this.getClients();
    }

    ngOnDestroy(): void {
        this.getClientsSubscription.unsubscribe();
    }

    getClients(): void {
        this.gettingClients = true;
        this.showApiClient.uuid = null;
        this.showApiClient.api_token = null;

        this.getClientsSubscription = this.https.get('web/getClients', {}).subscribe((clients: []) => {
            if (clients) {
                this.clients = clients;
                this.gettingClients = false;
            }
        });
    }

    showClientsApiData(uuid): void {
        if (this.showApiClient.uuid === uuid) {
            this.showApiClient.uuid = null;
            this.showApiClient.api_token = null;
        } else {
            this.showApiClient.uuid = null;
            this.showApiClient.api_token = null;
            this.showApiClient.uuid = uuid;

            this.https.get('web/getClientsToken', {
                uuid
            }).toPromise()
            .then((data: any) => this.showApiClient.api_token = data.api_token)
            .catch(err => console.log(err));
        }
    }
    updateClientToken(uuid): void {
        this.showApiClient.api_token = null;
        this.https.post('web/updateClientToken', {
            uuid
        }).toPromise()
        .then(() => this.getClients())
        .catch(err => console.log(err));
    }

    openClientFormDialog(cityData): void {
        const dialogRef = this.dialog.open(ClientFormDialogComponent, {
            data: JSON.parse(JSON.stringify(cityData)),
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.getClients();
            }
        });
    }

}
