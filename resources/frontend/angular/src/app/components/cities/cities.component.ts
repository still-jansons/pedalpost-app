import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CityFormDialogComponent } from './city-form/dialog-city-form.component';
import { DeleteCityDialogComponent } from './delete-city/dialog-delete-city.component';

@Component({
    selector: 'app-cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
    cities = [];
    gettingCities = true;

    weekArray = [
        'Mo',
        'Tu',
        'We',
        'Th',
        'Fr',
        'Sa',
        'Su'
    ];

    constructor(
        private dialog: MatDialog,
        private https: HttpService
    ) { }

    ngOnInit(): void {
        this.getCities();
    }

    getCities(): void {
        this.gettingCities = true;
        this.https.get('web/getCities', {}).subscribe((cities: []) => {
            if (cities) {
                this.cities = cities;
                this.gettingCities = false;
            }
        });
    }

    openCityFormDialog(cityData): void {
        const dialogRef = this.dialog.open(CityFormDialogComponent, {
            data: JSON.parse(JSON.stringify(cityData)),
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.getCities();
            }
        });
    }

    openDeleteCityDialog(cityData): void {
        const dialogRef = this.dialog.open(DeleteCityDialogComponent, {
            data: JSON.parse(JSON.stringify(cityData)),
            autoFocus: false,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.getCities();
            }
        });
    }

}
