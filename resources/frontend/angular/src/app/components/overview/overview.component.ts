import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['../cities/cities.component.scss', './overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
    cities = [];
    gettingCities = true;

    getCitiesSubscription: Subscription;
    getCityOrdersSubscription: Subscription;

    constructor(
        private https: HttpService
    ) { }

    ngOnInit(): void {
        this.getCities();
    }

    ngOnDestroy(): void {
        this.getCitiesSubscription.unsubscribe();
        if (!this.gettingCities) {
            this.getCityOrdersSubscription.unsubscribe();
        }
    }

    getCities(): void {
        this.gettingCities = true;
        this.getCitiesSubscription = this.https.get('web/getCities', {}).subscribe((cities: []) => {
            if (cities) {
                console.log(cities);
                this.cities = cities;
                this.gettingCities = false;
                this.getCityOrders(this.cities);
            }
        });
    }

    getCityOrders(cities) {
        for (let city of cities) {
            city.orders = null;
            this.getCityOrdersSubscription = this.https.get('web/getCityOrders', {
                city_id: city.id
            }).subscribe((orders: any) => {
                console.log(orders);
                city.orders = orders;
            });
        }
    }

}
