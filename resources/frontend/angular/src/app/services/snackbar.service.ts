
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMessageComponent } from '../components/snackbar/snackbar-message.component';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    constructor(private snackbar: MatSnackBar) {}

    openSnackBar(processed, duration, message): void {
        this.snackbar.openFromComponent(SnackbarMessageComponent, {
            duration,
            data: {processed, message}
        });
    }
    dismissSnackBar(): void {
        this.snackbar.dismiss();
    }
}
