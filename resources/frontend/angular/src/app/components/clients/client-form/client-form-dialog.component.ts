import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
    selector: 'app-client-form-dialog',
    templateUrl: './client-form-dialog.component.html',
    styleUrls: ['./client-form-dialog.component.scss']
})
export class ClientFormDialogComponent implements OnInit {
    clientForm = {
        uuid: null,
        name: '',
    };
    savingForm = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public clientData: any,
        private dialogRef: MatDialogRef<ClientFormDialogComponent>,
        private https: HttpService,
        private snackbarService: SnackbarService
    ) {
        if (clientData) {
            this.clientForm = clientData;
        }
    }

    ngOnInit(): void {
    }

    closeDialog(clientData): void {
        this.dialogRef.close(clientData);
    }

    submitForm(): void {
        this.savingForm = true;
        this.snackbarService.openSnackBar(null, null, 'Saving form...');

        const url = (this.clientData) ? 'web/updateClientName' : 'web/createClient';

        this.https.post(url, {
            uuid: this.clientForm.uuid,
            name: this.clientForm.name.trim(),
        }).toPromise().then(() => {
            this.snackbarService.openSnackBar(true, 2500, 'Client saved.');
            this.closeDialog(true);
        }).catch(err => {
            this.snackbarService.openSnackBar(false, 2500, 'Failed to save a form.');
            console.log(err);
        });
    }

}
