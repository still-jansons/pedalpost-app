import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar-message',
    templateUrl: './snackbar-message.component.html',
})
export class SnackbarMessageComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data) {}
}
