import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../../services/http.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
    selector: 'app-dialog-city-form',
    templateUrl: './dialog-city-form.component.html',
    styleUrls: ['./dialog-city-form.component.scss']
})
export class CityFormDialogComponent {
    savingForm = false;

    cityForm = {
        id: null,
        name: '',
        zip_codes: [],
        capacity_schedule: []
    };

    weekArray = [
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
        'Su'
    ];

    showNewCodesInput = false;
    newCodesInput = '';

    showScheduleForm = false;
    scheduleRowForm = {
        time_from: '00:00',
        time_to: '00:00',
        capacity: 0,
        time_id: '',
        availability_trough_week: [
            {
                day: 'monday',
                day_number: 1,
                available: false
            },
            {
                day: 'tuesday',
                day_number: 2,
                available: false
            },
            {
                day: 'wednesday',
                day_number: 3,
                available: false
            },
            {
                day: 'thursday',
                day_number: 4,
                available: false
            },
            {
                day: 'friday',
                day_number: 5,
                available: false
            },
            {
                day: 'saturday',
                day_number: 6,
                available: false
            },
            {
                day: 'sunday',
                day_number: 7,
                available: false
            }
        ]
    };

    constructor(
        @Inject(MAT_DIALOG_DATA) public cityData: any,
        private dialogRef: MatDialogRef<CityFormDialogComponent>,
        private https: HttpService,
        private snackbarService: SnackbarService
    ) {
        if (cityData) {
            this.cityForm = cityData;
        }
    }

    closeDialog(cityData): void {
        this.dialogRef.close(cityData);
    }

    addNewCodes(save): void {
        if (save) {
            this.newCodesInput = this.newCodesInput.replace(/\s/g, '');
            const codeArray = this.newCodesInput.split(',');
            if (codeArray.length > 0) {
                for (const code of codeArray) {
                    if (code.trim() !== '') {
                        if (this.cityForm.zip_codes.indexOf(code) === -1) {
                            this.cityForm.zip_codes.push(code);
                        }
                    }
                }
            }
            this.showNewCodesInput = false;
        }
        this.showNewCodesInput = false;
        this.newCodesInput = '';
    }

    removeZipCode(listIndex): void {
        this.cityForm.zip_codes.splice(listIndex, 1);
    }

    addNewTimeRow(): void {
        this.cityForm.capacity_schedule.push(JSON.parse(JSON.stringify(this.scheduleRowForm)));
    }

    removeTimeRow(listIndex): void {
        this.cityForm.capacity_schedule.splice(listIndex, 1);
    }

    submitForm(): void {
        this.snackbarService.openSnackBar(null, null, 'Saving form...');
        this.savingForm = true;

        for (let schedule of this.cityForm.capacity_schedule) {
            const time_from = schedule.time_from.replaceAll(":", "");
            const time_to = schedule.time_to.replaceAll(":", "");
            schedule.time_id = time_from.concat(time_to);

        }

        this.https.post('web/updateOrCreateCity', {
            id: this.cityForm.id,
            city_name: this.cityForm.name,
            zip_codes: JSON.stringify(this.cityForm.zip_codes),
            time_capacity: JSON.stringify(this.cityForm.capacity_schedule)
        }).toPromise().then((data) => {
            this.snackbarService.openSnackBar(true, 2500, 'Form saved.');
            this.savingForm = false;
            this.closeDialog(true);
        }).catch(err => {
            this.snackbarService.openSnackBar(false, 2500, 'Failed to save a form.');
            console.log(err);
        });
    }
}
