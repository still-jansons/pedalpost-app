import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../services/http.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
    selector: 'app-dialog-city-form',
    templateUrl: './dialog-delete-city.component.html',
    styleUrls: ['./dialog-delete-city.component.scss']
})
export class DeleteCityDialogComponent {
    deleting = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public cityData: any,
        private dialogRef: MatDialogRef<DeleteCityDialogComponent>,
        private https: HttpService,
        private snackbarService: SnackbarService
    ) {}

    closeDialog(cityData): void {
        this.dialogRef.close(cityData);
    }

    deleteCity(): void {
        this.deleting = true;
        this.snackbarService.openSnackBar(null, null, 'Deleting...');
        this.https.post('web/deleteCity', {
            city_id: this.cityData.id
        }).toPromise().then(() => {
            this.deleting = false;
            this.snackbarService.openSnackBar(true, 2500, 'Deleted.');
            this.closeDialog(true);
        }).catch(err => {
            this.deleting = false;
            this.snackbarService.openSnackBar(false, 2500, 'Something went wrong. Please try again.');
            console.log(err);
        });
    }
}
