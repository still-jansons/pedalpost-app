import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../services/http.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
    selector: 'app-dialog-delete-client',
    templateUrl: './dialog-delete-client.component.html',
    styleUrls: ['./dialog-delete-client.component.scss']
})
export class DeleteClientDialogComponent {
    deleting = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public client: any,
        private dialogRef: MatDialogRef<DeleteClientDialogComponent>,
        private https: HttpService,
        private snackbarService: SnackbarService
    ) {}

    closeDialog(deleteClient): void {
        this.dialogRef.close(deleteClient);
    }

    deleteClient(): void {
        this.deleting = true;
        this.snackbarService.openSnackBar(null, null, 'Deleting...');
        this.https.post('web/deleteClient', {
            uuid: this.client.uuid
        }).toPromise().then(response => {
            if (response) {
                this.snackbarService.openSnackBar(true, 1500, "Client deleted");
                this.closeDialog(true);
            } else {
                this.snackbarService.openSnackBar(false, 2500, "We couldn't delete this client. Please try again.");
                this.closeDialog(false);
            }
        }).catch(err => {
            this.snackbarService.openSnackBar(false, 2500, "Something went wrong. Please try again.");
            console.log(err)
        });
    }
}
