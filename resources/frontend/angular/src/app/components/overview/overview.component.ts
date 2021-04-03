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
    dates = [];
    gettingCities = true;
    gettingDates = true;
    gettingOrders = true;

    getCitiesSubscription: Subscription;
    getDatesSubscription: Subscription;
    getOrdersSubscription: Subscription;

    constructor(
        private https: HttpService
    ) { }

    ngOnInit(): void {
        this.getCities();
    }

    ngOnDestroy(): void {
        this.getCitiesSubscription.unsubscribe();
        if (!this.gettingOrders) {
            this.getOrdersSubscription.unsubscribe();
        }
    }

    getCities(): void {
        this.gettingCities = true;
        this.getCitiesSubscription = this.https.get('web/getCities', {}).subscribe((cities: []) => {
            if (cities) {
                this.cities = cities;
                this.gettingCities = false;
                this.getDates();
            }
        });
    }

    getDates(): void {
        this.gettingDates = true;
        this.getDatesSubscription = this.https.get('web/getDates', {
            days_limit: 8
        }).subscribe((dates: any) => {
            if (dates) {
                this.dates = dates;
                this.gettingDates = false;
                this.getOrders(this.dates);
            }
        });
    }

    getOrders(dates) {
        this.gettingOrders = true;
        
        const dates_id_array = dates.map(date => {
            return date.date_id;
        });

        this.getOrdersSubscription = this.https.get('web/getOrdersByDate', {
            dates: JSON.stringify(dates_id_array)
        }).subscribe((orders: any) => {
            if (orders) {
                this.setDateCurrentAvailability(orders);
                this.gettingOrders = false;
            }
        });
    }

    setDateCurrentAvailability(orders) {
        for (let date of this.dates) {
            for (let city of this.cities) {
                date.orders_summary[city.id] = this.getCityOrderInfo(city, date, orders);
            }
        }
    }

    getCityOrderInfo(city, date, orders) {
        let total_capacity = 0;
        let used_capacity = 0;
        let orders_count = 0;

        if (city.schedule_trough_week[date.day_of_week].length === 1) {
            total_capacity = city.schedule_trough_week[date.day_of_week][0].capacity;
        } else if ((city.schedule_trough_week[date.day_of_week].length > 1)) {
            total_capacity = city.schedule_trough_week[date.day_of_week].reduce((a, b) => a.capacity + b.capacity, 0);
        }

        if (orders[date.date_id]) {
            if (orders[date.date_id][city.id]) {
                orders_count = orders[date.date_id][city.id].length;
                used_capacity = (total_capacity === 0) ? 0 : (orders[date.date_id][city.id].length / total_capacity) * 100;
            }
        }

        return {
            orders: orders_count,
            total_capacity: total_capacity,
            used_capacity: used_capacity
        }
    }
}
