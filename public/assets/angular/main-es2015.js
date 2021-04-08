(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!******************************************************!*\
  !*** multi ./resources/frontend/angular/src/main.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/arturs/Documents/Projekti/App/git-hub/pedalpost-app/resources/frontend/angular/src/main.ts */"qtu1");


/***/ }),

/***/ "7zFA":
/*!**************************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/components/overview/overview.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "kMeT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "KMiY");







function OverviewComponent_div_5_div_1_div_3_div_6_div_16_h6_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const city_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", date_r16.orders_summary[city_r13.id] == null ? null : date_r16.orders_summary[city_r13.id].used_capacity, " %");
} }
function OverviewComponent_div_5_div_1_div_3_div_6_div_16_h6_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "sapn", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const city_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](date_r16.orders_summary[city_r13.id] == null ? null : date_r16.orders_summary[city_r13.id].orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" / ", date_r16.orders_summary[city_r13.id] == null ? null : date_r16.orders_summary[city_r13.id].total_capacity, "");
} }
function OverviewComponent_div_5_div_1_div_3_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OverviewComponent_div_5_div_1_div_3_div_6_div_16_h6_8_Template, 2, 1, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OverviewComponent_div_5_div_1_div_3_div_6_div_16_h6_10_Template, 4, 2, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r16 = ctx.$implicit;
    const city_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](date_r16.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](date_r16.day_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", date_r16.orders_summary[city_r13.id])("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", date_r16.orders_summary[city_r13.id])("ngIfElse", _r9);
} }
function OverviewComponent_div_5_div_1_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Day of the week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Used capacity %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OverviewComponent_div_5_div_1_div_3_div_6_div_16_Template, 11, 6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.dates);
} }
function OverviewComponent_div_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OverviewComponent_div_5_div_1_div_3_div_6_Template, 17, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.gettingDates)("ngIfElse", _r5);
} }
function OverviewComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OverviewComponent_div_5_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.citySearchInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OverviewComponent_div_5_div_1_div_3_Template, 7, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filterByKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.citySearchInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 2, ctx_r11.cities, ctx_r11.citySearchInput, "name"));
} }
function OverviewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OverviewComponent_div_5_div_1_Template, 5, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cities.length > 0)("ngIfElse", _r3);
} }
function OverviewComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OverviewComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cities list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OverviewComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OverviewComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Orders list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OverviewComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OverviewComponent {
    constructor(https) {
        this.https = https;
        this.cities = [];
        this.dates = [];
        this.gettingCities = true;
        this.gettingDates = true;
        this.gettingOrders = true;
    }
    ngOnInit() {
        this.getCities();
    }
    ngOnDestroy() {
        this.getCitiesSubscription.unsubscribe();
        if (!this.gettingOrders) {
            this.getOrdersSubscription.unsubscribe();
        }
    }
    getCities() {
        this.gettingCities = true;
        this.getCitiesSubscription = this.https.get('web/getCities', {}).subscribe((cities) => {
            if (cities) {
                this.cities = cities;
                this.gettingCities = false;
                this.getDates();
            }
        });
    }
    getDates() {
        this.gettingDates = true;
        this.getDatesSubscription = this.https.get('web/getDates', {
            days_limit: 8
        }).subscribe((dates) => {
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
        }).subscribe((orders) => {
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
        }
        else if ((city.schedule_trough_week[date.day_of_week].length > 1)) {
            total_capacity = city.schedule_trough_week[date.day_of_week].reduce((a, b) => a + (b.capacity || 0), 0);
        }
        if (orders[date.date_id]) {
            if (orders[date.date_id][city.id]) {
                orders_count = orders[date.date_id][city.id].length;
                if (orders_count > total_capacity) {
                    used_capacity = 100;
                }
                else {
                    used_capacity = Number(((total_capacity === 0) ? 0 : (orders[date.date_id][city.id].length / total_capacity) * 100).toFixed(0));
                }
            }
        }
        return {
            orders: orders_count,
            total_capacity: total_capacity,
            used_capacity: used_capacity
        };
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 16, vars: 2, consts: [[1, "d-flex", "align-items-center", "pl-4", "pr-4", "border-bottom", "position-relative", "view-header-wrapper", 2, "height", "70px"], [1, "mb-0", "font-weight-bold"], [4, "ngIf", "ngIfElse"], ["isLoading", ""], ["isEmpty", ""], ["ordersIsLoading", ""], ["ordersIsEmpty", ""], ["itemColumnIsLoading", ""], ["placeholder", "Search city...", "autocomplete", "off", 1, "animation", "border-bottom", "search-cities-wrapper", 3, "ngModel", "ngModelChange"], [1, "list-cities"], ["class", "city-container shadow-sm", 4, "ngFor", "ngForOf"], [1, "city-container", "shadow-sm"], [1, "city-container-header", "border-bottom"], [1, "d-flex", "align-items-center", 2, "flex", "1"], [1, "city-container-body"], [1, "d-flex", "align-items-center", "table-header-row"], [1, "mr-2", "pr-2", "border-right", "ellipsis", 2, "flex", "2"], [1, "mb-0", "column-header-label", "ellipsis"], [1, "mr-2", "pr-2", "border-right", "ellipsis", 2, "flex", "1"], [1, "ellipsis", 2, "flex", "1"], ["class", "d-flex align-items-center date-item border-bottom", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "date-item", "border-bottom"], [1, "mb-0"], ["class", "mb-0", 4, "ngIf", "ngIfElse"], [2, "color", "grey"], [1, "spinner", "d-flex", "align-items-center", "justify-content-center", 2, "height", "calc(100vh - 70px)"], ["mode", "indeterminate", "diameter", "30", "strokeWidth", "4"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center", 2, "height", "calc(100vh - 70px)"], [1, "font-weight-bold", "mb-0", 2, "color", "grey"], ["icon", "folder-open", 1, "mr-2"], [1, "spinner", "d-flex", "align-items-center", "justify-content-center"], ["mode", "indeterminate", "diameter", "24", "strokeWidth", "4"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center"], [1, "spinner"], ["mode", "indeterminate", "diameter", "14", "strokeWidth", "2"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OverviewComponent_div_5_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OverviewComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OverviewComponent_ng_template_8_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OverviewComponent_ng_template_10_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OverviewComponent_ng_template_12_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OverviewComponent_ng_template_14_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gettingCities)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinner"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterByKeyPipe"]], styles: [".view-header-wrapper[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 0px;\n  z-index: 10;\n  background-color: white;\n}\n\n.pill-button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: black;\n  background: white;\n  font-weight: 700;\n  line-height: 29px;\n}\n\n.pill-button.danger[_ngcontent-%COMP%] {\n  border-color: #ff5151;\n  color: #ff5151;\n}\n\n.pill-button[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n\n.pill-button.danger[_ngcontent-%COMP%]:hover {\n  background: #ff5151;\n  color: white;\n}\n\n.search-cities-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  display: block;\n  top: 70px;\n  z-index: 10;\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 0px 25px;\n  outline: none;\n  height: 46px;\n  border-radius: 0px !important;\n  background: #e8e8e8;\n}\n\n.search-cities-wrapper[_ngcontent-%COMP%]:focus {\n  border-bottom: 1px solid transparent;\n  outline: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.search-cities-wrapper[_ngcontent-%COMP%]:active {\n  border-bottom: 1px solid transparent;\n  outline: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.list-cities[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.city-container[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.city-container[_ngcontent-%COMP%]   .city-container-header[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  padding: 0px 20px;\n}\n\n.city-container[_ngcontent-%COMP%]   .city-container-body[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n}\n\n.city-container[_ngcontent-%COMP%]   .city-container-body[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #495057;\n}\n\n.city-container[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 14px;\n}\n\n.zip-code-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 8px;\n  border: 1px solid #6c757d;\n  border-radius: 30px;\n  margin-bottom: 5px;\n  line-height: 14px;\n  cursor: pointer;\n}\n\n.zip-code-pill[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 5px;\n}\n\n.column-header-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHdEQUFBO0FBT0o7O0FBTEE7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx3REFBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBVEk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFXUjs7QUFUSTtFQUNJLGtCQUFBO0FBV1I7O0FBVlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVlaOztBQVJBO0VBQ0ksbUJBQUE7QUFXSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGlCQUFBO0FBWUo7O0FBVEE7RUFDSSxjQUFBO0FBWUoiLCJmaWxlIjoiY2l0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctaGVhZGVyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5waWxsLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG4ucGlsbC1idXR0b24uZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6ICNmZjUxNTE7XG4gICAgY29sb3I6ICNmZjUxNTE7XG59XG4ucGlsbC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5waWxsLWJ1dHRvbi5kYW5nZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZjUxNTE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnNlYXJjaC1jaXRpZXMtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiA3MHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGhlaWdodDogNDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuLnNlYXJjaC1jaXRpZXMtd3JhcHBlcjpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLWNpdGllcy13cmFwcGVyOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XG59XG4ubGlzdC1jaXRpZXMge1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG4uY2l0eS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgLmNpdHktY29udGFpbmVyLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgfVxuICAgIC5jaXR5LWNvbnRhaW5lci1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jaXR5LWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uemlwLWNvZGUtcGlsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uemlwLWNvZGUtcGlsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbHVtbi1oZWFkZXItbGFiZWwge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xufVxuIl19 */", ".table-header-row[_ngcontent-%COMP%] {\n  height: 30px;\n  border-bottom: 1px solid #6c757d;\n}\n.table-header-row[_ngcontent-%COMP%]   .column-header-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.date-item[_ngcontent-%COMP%] {\n  padding: 14px 0px;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFFSiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1oZWFkZXItcm93IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Yzc1N2Q7XG4gICAgLmNvbHVtbi1oZWFkZXItbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuLmRhdGUtaXRlbSB7XG4gICAgcGFkZGluZzogMTRweCAwcHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufSJdfQ== */"] });


/***/ }),

/***/ "9/xU":
/*!**********************************************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/components/cities/delete-city/dialog-delete-city.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DeleteCityDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCityDialogComponent", function() { return DeleteCityDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "kMeT");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/snackbar.service */ "pOL4");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DeleteCityDialogComponent {
    constructor(cityData, dialogRef, https, snackbarService) {
        this.cityData = cityData;
        this.dialogRef = dialogRef;
        this.https = https;
        this.snackbarService = snackbarService;
        this.deleting = false;
    }
    closeDialog(cityData) {
        this.dialogRef.close(cityData);
    }
    deleteCity() {
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
DeleteCityDialogComponent.ɵfac = function DeleteCityDialogComponent_Factory(t) { return new (t || DeleteCityDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"])); };
DeleteCityDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteCityDialogComponent, selectors: [["app-dialog-city-form"]], decls: 19, vars: 2, consts: [[1, "dialog-container"], [1, "dialog-header-wrapper", "d-flex", "align-items-center", "border-bottom"], [2, "flex", "1"], [1, "font-weight-bold", "mb-0"], [1, "ml-1", 2, "color", "#d04141"], [1, "dialog-secction-wrapper", 2, "padding-top", "30px"], [1, "w-100", 2, "padding", "20px", "background", "#ffe9e9", "border-radius", "6px", "border", "1px solid #f9dbdb"], [1, "mb-0", "font-weight-light"], [1, "mr-2", "font-weight-bold", 2, "color", "#ff5151"], [1, "dialog-footer"], ["mat-stroked-button", "", 1, "animation", "pill-button", "mr-1", 2, "background", "lightgray", "border-color", "transparent", 3, "click"], ["mat-stroked-button", "", 1, "animation", "pill-button", "danger", 3, "disabled", "click"]], template: function DeleteCityDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Delete city:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Warning:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "You are about to permanently delete all data associated with this city.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteCityDialogComponent_Template_button_click_14_listener() { return ctx.closeDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteCityDialogComponent_Template_button_click_16_listener() { return ctx.deleteCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cityData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.deleting);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  max-height: 90vh;\n  width: 90vw;\n  max-width: 700px;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-header-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  z-index: 10;\n  position: sticky;\n  top: 0px;\n  background-color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-secction-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 30px;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: black;\n  background: white;\n  font-weight: 700;\n  line-height: 29px;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.dark[_ngcontent-%COMP%] {\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.danger[_ngcontent-%COMP%] {\n  border-color: #ff5151;\n  color: #FFF;\n  background: #ff5151;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.danger[_ngcontent-%COMP%]:hover {\n  border-color: #c43434;\n  background: #c43434;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.dark.mat-button-disabled[_ngcontent-%COMP%] {\n  border-color: #646464;\n  background: #575757;\n  border-color: transparent;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 8px;\n  border: 1px solid #6c757d;\n  border-radius: 30px;\n  margin-bottom: 5px;\n  line-height: 14px;\n  cursor: pointer;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 5px;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:hover {\n  background-color: black;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:hover   h6[_ngcontent-%COMP%] {\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .column-header-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2RpYWxvZy1kZWxldGUtY2l0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7QUFDUjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBQ0k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDSTtFQUNJLGlCQUFBO0FBQ1I7QUFDSTtFQUNJLHVCQUFBO0FBQ1I7QUFBUTtFQUFLLFlBQUE7QUFHYjtBQUZRO0VBQVUsWUFBQTtBQUtsQjtBQUhJO0VBQ0ksY0FBQTtBQUtSIiwiZmlsZSI6ImRpYWxvZy1kZWxldGUtY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgICAvLyBtaW4taGVpZ2h0OiA2MHZoO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAuZGlhbG9nLWhlYWRlci13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAuZGlhbG9nLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmRpYWxvZy1zZWNjdGlvbi13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XG4gICAgfVxuICAgIC5waWxsLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICB9XG4gICAgLnBpbGwtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnBpbGwtYnV0dG9uLmRhcmsge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5waWxsLWJ1dHRvbi5kYW5nZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjUxNTE7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY1MTUxO1xuICAgIH1cbiAgICAucGlsbC1idXR0b24uZGFuZ2VyOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYzQzNDM0O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYzQzNDM0O1xuICAgIH1cbiAgICAucGlsbC1idXR0b24uZGFyay5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig4NywgODcsIDg3KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLnppcC1jb2RlLXBpbGwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuemlwLWNvZGUtcGlsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIC56aXAtY29kZS1waWxsOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIGg2IHsgY29sb3I6IHdoaXRlOyB9XG4gICAgICAgIGZhLWljb24geyBjb2xvcjogd2hpdGU7IH1cbiAgICB9XG4gICAgLmNvbHVtbi1oZWFkZXItbGFiZWwge1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "9D4K":
/*!*************************************************************!*\
  !*** ./resources/frontend/angular/src/app/app.component.ts ***!
  \*************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/http.service */ "kMeT");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






class AppComponent {
    constructor(https) {
        this.https = https;
        this.title = 'Pedalpost';
        this.user = {
            name: '',
            email: ''
        };
    }
    ngOnInit() {
        this.https.get('web/getLoggedUser', {}).toPromise().then((user) => {
            this.user = user;
        }).catch(() => console.log('No user found'));
    }
    logout() {
        window.location.replace('logout');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 34, vars: 2, consts: [[2, "height", "100vh"], [1, "main-drawer-container", "h-100"], ["mode", "side", "opened", ""], [1, "d-flex", "flex-column", "h-100", 2, "min-width", "350px"], [1, "logo-wrapper", "pl-3", "pr-3", "d-flex", "align-items-center", "border-bottom", 2, "height", "70px"], ["src", "./assets/angular/assets/pedalpost_horizontal.svg", "alt", "Pedalpost", "height", "48", 2, "margin-left", "-5px"], [1, "p-3", "routes-wrapper", 2, "flex", "1"], ["routerLink", "overview", "routerLinkActive", "view-active shadow", "mat-flat-button", "", 1, "animation", "view-item"], [1, "view-text", "mb-0", "text-left", "font-weight-bold"], ["icon", "home", 1, "pr-2"], ["routerLink", "cities", "routerLinkActive", "view-active shadow", "mat-flat-button", "", 1, "animation", "view-item"], ["icon", "city", 1, "pr-2"], ["routerLink", "clients", "routerLinkActive", "view-active shadow", "mat-flat-button", "", 1, "animation", "view-item"], ["icon", "users", 1, "pr-2"], [1, "border-top", "d-flex", 2, "height", "70px"], [1, "d-flex", "pl-3", "pr-3", "align-items-center", "h-100", 2, "flex", "1"], [1, "font-weight-bold", "mb-1"], [1, "font-weight-light", "mb-0", 2, "font-size", "14px"], ["mat-button", "", 1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "100%", "width", "70px", "background-color", "black", "border-radius", "0px", 3, "click"], ["icon", "sign-out-alt", 1, "text-white", 2, "font-size", "18px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".routes-wrapper[_ngcontent-%COMP%]   .view-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #cecece;\n  margin-bottom: 10px;\n  width: 100%;\n  height: 45px;\n}\n.routes-wrapper[_ngcontent-%COMP%]   .view-item[_ngcontent-%COMP%]   .view-text[_ngcontent-%COMP%] {\n  color: black;\n}\n.routes-wrapper[_ngcontent-%COMP%]   .view-item.view-active[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background-color: black;\n}\n.routes-wrapper[_ngcontent-%COMP%]   .view-item.view-active[_ngcontent-%COMP%]   .view-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.routes-wrapper[_ngcontent-%COMP%]   .view-item[_ngcontent-%COMP%]:not(.view-active):hover {\n  background: #e6e6e6;\n}\n.column-header-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7QUFDWjtBQUVJO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFJQTtFQUNJLGNBQUE7QUFESiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGVzLXdyYXBwZXIge1xuICAgIC52aWV3LWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgLnZpZXctdGV4dCB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnZpZXctaXRlbS52aWV3LWFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAudmlldy10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudmlldy1pdGVtOm5vdCgudmlldy1hY3RpdmUpOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICB9XG59XG5cbi5jb2x1bW4taGVhZGVyLWxhYmVsIHtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AiND":
/*!************************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/components/clients/clients.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _client_form_client_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-form/client-form-dialog.component */ "FdjA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "kMeT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");








function ClientsComponent_div_8_div_1_div_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show API info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
} }
function ClientsComponent_div_8_div_1_div_2_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hide API info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
} }
function ClientsComponent_div_8_div_1_div_2_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "API Json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientsComponent_div_8_div_1_div_2_div_14_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const client_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.updateClientToken(client_r7.uuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Regenerate token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "pre", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", "{", "\n    'uuid': ", ctx_r11.showApiClient.uuid, ",\n    'api_token': ", ctx_r11.showApiClient.api_token, "\n", "}", "\n");
} }
function ClientsComponent_div_8_div_1_div_2_div_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientsComponent_div_8_div_1_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClientsComponent_div_8_div_1_div_2_div_14_div_1_Template, 12, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClientsComponent_div_8_div_1_div_2_div_14_ng_template_2_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.showApiClient.api_token)("ngIfElse", _r12);
} }
function ClientsComponent_div_8_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientsComponent_div_8_div_1_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const client_r7 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.openClientFormDialog(client_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Edit name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientsComponent_div_8_div_1_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const client_r7 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r19.showClientsApiData(client_r7.uuid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ClientsComponent_div_8_div_1_div_2_span_12_Template, 3, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ClientsComponent_div_8_div_1_div_2_span_13_Template, 3, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ClientsComponent_div_8_div_1_div_2_div_14_Template, 4, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", client_r7.uuid !== ctx_r6.showApiClient.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", client_r7.uuid === ctx_r6.showApiClient.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", client_r7.uuid === ctx_r6.showApiClient.uuid);
} }
function ClientsComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ClientsComponent_div_8_div_1_div_2_Template, 15, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.clients);
} }
function ClientsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ClientsComponent_div_8_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.clients.length > 0)("ngIfElse", _r3);
} }
function ClientsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Clients list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ClientsComponent {
    constructor(dialog, https) {
        this.dialog = dialog;
        this.https = https;
        this.clients = [];
        this.gettingClients = false;
        this.showApiClient = {
            api_token: null,
            uuid: null
        };
    }
    ngOnInit() {
        this.getClients();
    }
    ngOnDestroy() {
        this.getClientsSubscription.unsubscribe();
    }
    getClients() {
        this.gettingClients = true;
        this.showApiClient.uuid = null;
        this.showApiClient.api_token = null;
        this.getClientsSubscription = this.https.get('web/getClients', {}).subscribe((clients) => {
            if (clients) {
                this.clients = clients;
                this.gettingClients = false;
            }
        });
    }
    showClientsApiData(uuid) {
        if (this.showApiClient.uuid === uuid) {
            this.showApiClient.uuid = null;
            this.showApiClient.api_token = null;
        }
        else {
            this.showApiClient.uuid = null;
            this.showApiClient.api_token = null;
            this.showApiClient.uuid = uuid;
            this.https.get('web/getClientsToken', {
                uuid
            }).toPromise()
                .then((data) => this.showApiClient.api_token = data.api_token)
                .catch(err => console.log(err));
        }
    }
    updateClientToken(uuid) {
        this.showApiClient.api_token = null;
        this.https.post('web/updateClientToken', {
            uuid
        }).toPromise()
            .then(() => this.getClients())
            .catch(err => console.log(err));
    }
    openClientFormDialog(cityData) {
        const dialogRef = this.dialog.open(_client_form_client_form_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ClientFormDialogComponent"], {
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
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], decls: 13, vars: 2, consts: [[1, "d-flex", "align-items-center", "pl-4", "pr-4", "border-bottom", "position-relative", "view-header-wrapper", 2, "height", "70px"], [1, "mb-0", "font-weight-bold"], [1, "pl-2", "ml-2", "border-left"], ["mat-stroked-button", "", 1, "animation", "pill-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["isLoading", ""], ["isEmpty", ""], ["class", "w-100 d-flex justify-content-center pl-4 pr-4", "style", "height: calc(100vh - 70px);", 4, "ngIf", "ngIfElse"], [1, "w-100", "d-flex", "justify-content-center", "pl-4", "pr-4", 2, "height", "calc(100vh - 70px)"], [1, "pt-3", 2, "flex", "1", "max-width", "800px", "overflow", "auto"], ["class", "border shadow-sm mb-3", "style", "background: white; border-radius: 6px;", 4, "ngFor", "ngForOf"], [1, "border", "shadow-sm", "mb-3", 2, "background", "white", "border-radius", "6px"], [1, "d-flex", "align-items-center", 2, "padding", "15px 25px"], [1, "ml-2", "pl-2", "border-left", 2, "flex", "1"], ["mat-stroked-button", "", 1, "animation", "pill-button", "mr-2", 3, "click"], ["icon", "pen", 1, "mr-2", 3, "fixedWidth"], [1, "ml-2", "pl-2", "border-left"], [4, "ngIf"], ["class", "border-top", 4, "ngIf"], ["icon", "eye", 1, "mr-2", 2, "font-size", "15px", 3, "fixedWidth"], ["icon", "eye-slash", 1, "mr-2", 2, "font-size", "15px", 3, "fixedWidth"], [1, "border-top"], ["style", "padding: 25px;", 4, "ngIf", "ngIfElse"], ["tokenLoading", ""], [2, "padding", "25px"], [1, "mb-3", "d-flex", "align-items-center"], [1, "font-weight-bold", "mb-0", 2, "color", "#1f2931"], ["icon", "sync", 1, "mr-2", 3, "fixedWidth"], [1, "mb-0"], [1, "spinner", "d-flex", "align-items-center", "justify-content-center", 2, "padding", "25px"], ["mode", "indeterminate", "diameter", "24", "strokeWidth", "4"], [1, "spinner", "d-flex", "align-items-center", "justify-content-center", 2, "height", "calc(100vh - 70px)"], ["mode", "indeterminate", "diameter", "30", "strokeWidth", "4"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center", 2, "height", "calc(100vh - 70px)"], [1, "font-weight-bold", 2, "color", "grey"], ["icon", "folder-open", 1, "mr-2"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientsComponent_Template_button_click_6_listener() { return ctx.openClientFormDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " + Add client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ClientsComponent_div_8_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ClientsComponent_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ClientsComponent_ng_template_11_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.gettingClients)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinner"]], styles: [".view-header-wrapper[_ngcontent-%COMP%] {\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  display: block;\n  top: 0px;\n  z-index: 10;\n  background-color: white;\n}\n\n.pill-button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: black;\n  background: white;\n  font-weight: 700;\n  line-height: 29px;\n}\n\n.pill-button.danger[_ngcontent-%COMP%] {\n  border-color: #ff5151;\n  color: #ff5151;\n}\n\n.pill-button[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n\n.pill-button.danger[_ngcontent-%COMP%]:hover {\n  background: #ff5151;\n  color: white;\n}\n\npre[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: #1f2831;\n  color: white;\n  font-weight: 500;\n  padding: 20px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU1KIiwiZmlsZSI6ImNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1oZWFkZXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnBpbGwtYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMjlweDtcbn1cbi5waWxsLWJ1dHRvbi5kYW5nZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmNTE1MTtcbiAgICBjb2xvcjogI2ZmNTE1MTtcbn1cbi5waWxsLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnBpbGwtYnV0dG9uLmRhbmdlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmNTE1MTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5wcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogIzFmMjgzMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "FdjA":
/*!***********************************************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/components/clients/client-form/client-form-dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ClientFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFormDialogComponent", function() { return ClientFormDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "kMeT");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/snackbar.service */ "pOL4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function ClientFormDialogComponent_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit client name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientFormDialogComponent_h5_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add new client");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientFormDialogComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ClientFormDialogComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ClientFormDialogComponent {
    constructor(clientData, dialogRef, https, snackbarService) {
        this.clientData = clientData;
        this.dialogRef = dialogRef;
        this.https = https;
        this.snackbarService = snackbarService;
        this.clientForm = {
            uuid: null,
            name: '',
        };
        this.savingForm = false;
        if (clientData) {
            this.clientForm = clientData;
        }
    }
    ngOnInit() {
    }
    closeDialog(clientData) {
        this.dialogRef.close(clientData);
    }
    submitForm() {
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
ClientFormDialogComponent.ɵfac = function ClientFormDialogComponent_Factory(t) { return new (t || ClientFormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"])); };
ClientFormDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientFormDialogComponent, selectors: [["app-client-form-dialog"]], decls: 17, vars: 6, consts: [[1, "dialog-container"], [1, "dialog-header-wrapper", "d-flex", "align-items-center", "border-bottom"], [2, "flex", "1"], ["class", "font-weight-bold mb-0", 4, "ngIf"], [1, "dialog-secction-wrapper", 2, "padding-top", "30px"], [1, "w-100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "Client", 1, "font-weight-bold", 2, "font-size", "18px", 3, "ngModel", "ngModelChange"], [1, "dialog-footer"], ["mat-stroked-button", "", 1, "animation", "pill-button", "mr-1", 2, "background", "lightgray", "border-color", "transparent", 3, "click"], ["mat-stroked-button", "", 1, "animation", "pill-button", "dark", 3, "disabled", "click"], [4, "ngIf"], [1, "font-weight-bold", "mb-0"]], template: function ClientFormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ClientFormDialogComponent_h5_3_Template, 2, 0, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ClientFormDialogComponent_h5_4_Template, 2, 0, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name of the client");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ClientFormDialogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.clientForm.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientFormDialogComponent_Template_button_click_12_listener() { return ctx.closeDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientFormDialogComponent_Template_button_click_14_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ClientFormDialogComponent_span_15_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ClientFormDialogComponent_span_16_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.clientData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.clientForm.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.clientForm.name === "" || ctx.savingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.clientData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  max-height: 90vh;\n  width: 90vw;\n  max-width: 700px;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-header-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  z-index: 10;\n  position: sticky;\n  top: 0px;\n  background-color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-secction-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 30px;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: black;\n  background: white;\n  font-weight: 700;\n  line-height: 29px;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.dark[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.dark.mat-button-disabled[_ngcontent-%COMP%] {\n  border-color: #646464;\n  background: #575757;\n  border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NsaWVudC1mb3JtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUVSIiwiZmlsZSI6ImNsaWVudC1mb3JtLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgLmRpYWxvZy1oZWFkZXItd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmRpYWxvZy1mb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5kaWFsb2ctc2VjY3Rpb24td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIH1cbiAgICAucGlsbC1idXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgfVxuICAgIC5waWxsLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5waWxsLWJ1dHRvbi5kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnBpbGwtYnV0dG9uLmRhcmsubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODcsIDg3LCA4Nyk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "KMiY":
/*!*****************************************************************!*\
  !*** ./resources/frontend/angular/src/app/pipes/filter.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: FilterByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByKeyPipe", function() { return FilterByKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterByKeyPipe {
    transform(items, searchText, searchProperty) {
        if (!items || !searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(item => {
            if (searchProperty) {
                if (item[searchProperty]) {
                    return item[searchProperty].toLowerCase().includes(searchText);
                }
            }
            else {
                return item.toLowerCase().includes(searchText);
            }
        });
    }
}
FilterByKeyPipe.ɵfac = function FilterByKeyPipe_Factory(t) { return new (t || FilterByKeyPipe)(); };
FilterByKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterByKey", type: FilterByKeyPipe, pure: true });


/***/ }),

/***/ "OcJC":
/*!**********************************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/components/snackbar/snackbar-message.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SnackbarMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarMessageComponent", function() { return SnackbarMessageComponent; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




function SnackbarMessageComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true)("pulse", true);
} }
function SnackbarMessageComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SnackbarMessageComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SnackbarMessageComponent {
    constructor(data) {
        this.data = data;
    }
}
SnackbarMessageComponent.ɵfac = function SnackbarMessageComponent_Factory(t) { return new (t || SnackbarMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MAT_SNACK_BAR_DATA"])); };
SnackbarMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SnackbarMessageComponent, selectors: [["app-snackbar-message"]], decls: 8, vars: 4, consts: [[1, "d-flex", "align-items-center"], [1, "mr-2", "pr-2", 2, "flex", "1"], [1, "mb-0", 2, "color", "white", "font-size", "14px"], [1, "align-right"], [4, "ngIf"], ["icon", "spinner", 2, "font-size", "14px", 3, "fixedWidth", "pulse"], ["icon", "exclamation-triangle", 2, "font-size", "14px", "color", "#ffad45"], ["icon", "check-circle", 2, "font-size", "14px", "color", "#38ff65"]], template: function SnackbarMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SnackbarMessageComponent_span_5_Template, 2, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SnackbarMessageComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SnackbarMessageComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.processed == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.processed == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.processed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], encapsulation: 2 });


/***/ }),

/***/ "PkmI":
/*!**********************************************************!*\
  !*** ./resources/frontend/angular/src/app/app.module.ts ***!
  \**********************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vvQR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "9D4K");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/overview/overview.component */ "7zFA");
/* harmony import */ var _components_cities_cities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cities/cities.component */ "Zz0B");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/clients/clients.component */ "AiND");
/* harmony import */ var _components_snackbar_snackbar_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/snackbar/snackbar-message.component */ "OcJC");
/* harmony import */ var _components_cities_city_form_dialog_city_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cities/city-form/dialog-city-form.component */ "RFt9");
/* harmony import */ var _components_cities_delete_city_dialog_delete_city_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cities/delete-city/dialog-delete-city.component */ "9/xU");
/* harmony import */ var _modules_font_awesome_icons_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/font-awesome-icons.module */ "mlCW");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/material.module */ "c3kv");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter.pipe */ "KMiY");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/http.service */ "kMeT");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/snackbar.service */ "pOL4");
/* harmony import */ var _components_clients_client_form_client_form_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/clients/client-form/client-form-dialog.component */ "FdjA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");







// COMPONENTS




// DIALOGS


// FONT AWESOME

// MATERIAL MODULE

// PIPES

// SERVICES




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        _services_http_service__WEBPACK_IMPORTED_MODULE_16__["HttpService"],
        _services_snackbar_service__WEBPACK_IMPORTED_MODULE_17__["SnackbarService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
            _modules_font_awesome_icons_module__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIconsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterByKeyPipe"],
        _components_cities_cities_component__WEBPACK_IMPORTED_MODULE_8__["CitiesComponent"],
        _components_cities_city_form_dialog_city_form_component__WEBPACK_IMPORTED_MODULE_11__["CityFormDialogComponent"],
        _components_cities_delete_city_dialog_delete_city_component__WEBPACK_IMPORTED_MODULE_12__["DeleteCityDialogComponent"],
        _components_snackbar_snackbar_message_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarMessageComponent"],
        _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_9__["ClientsComponent"],
        _components_clients_client_form_client_form_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ClientFormDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _modules_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
        _modules_font_awesome_icons_module__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIconsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "RFt9":
/*!******************************************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/components/cities/city-form/dialog-city-form.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CityFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityFormDialogComponent", function() { return CityFormDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "kMeT");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/snackbar.service */ "pOL4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");












function CityFormDialogComponent_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit city");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_h5_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add new city");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.showNewCodesInput = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " + Add codes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_div_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.addNewCodes(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_div_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.addNewCodes(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " + Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Supported zip codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CityFormDialogComponent_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.newCodesInput = $event; })("keydown.enter", function CityFormDialogComponent_div_19_Template_input_keydown_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.addNewCodes(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Important:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "To add multiple zip codes, please seperate each code with comma ( , ) symbol. E.g.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "0026, 0037, 0159...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.newCodesInput);
} }
function CityFormDialogComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_div_20_div_1_Template_fa_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const zip_index_r24 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.removeZipCode(zip_index_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](code_r23);
} }
function CityFormDialogComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CityFormDialogComponent_div_20_div_1_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.cityForm.zip_codes);
} }
function CityFormDialogComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Zip codes list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.addNewTimeRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " + Add row ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_div_30_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](day_r31);
} }
function CityFormDialogComponent_div_30_div_11_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CityFormDialogComponent_div_30_div_11_div_9_Template_mat_checkbox_ngModelChange_1_listener($event) { const day_r35 = ctx.$implicit; return day_r35.available = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", day_r35.available)("checked", day_r35.available);
} }
function CityFormDialogComponent_div_30_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CityFormDialogComponent_div_30_div_11_Template_input_ngModelChange_2_listener($event) { const time_row_r32 = ctx.$implicit; return time_row_r32.time_from = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CityFormDialogComponent_div_30_div_11_Template_input_ngModelChange_5_listener($event) { const time_row_r32 = ctx.$implicit; return time_row_r32.time_to = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CityFormDialogComponent_div_30_div_11_Template_input_ngModelChange_7_listener($event) { const time_row_r32 = ctx.$implicit; return time_row_r32.capacity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CityFormDialogComponent_div_30_div_11_div_9_Template, 2, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_div_30_div_11_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const i_r33 = ctx.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r40.removeTimeRow(i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", time_row_r32.time_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", time_row_r32.time_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", time_row_r32.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", time_row_r32.availability_trough_week);
} }
function CityFormDialogComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Available time frame");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Capacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CityFormDialogComponent_div_30_div_9_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CityFormDialogComponent_div_30_div_11_Template, 13, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.weekArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.cityForm.capacity_schedule);
} }
function CityFormDialogComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Capacity schedule list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CityFormDialogComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CityFormDialogComponent {
    constructor(cityData, dialogRef, https, snackbarService) {
        this.cityData = cityData;
        this.dialogRef = dialogRef;
        this.https = https;
        this.snackbarService = snackbarService;
        this.savingForm = false;
        this.cityForm = {
            id: null,
            name: '',
            zip_codes: [],
            capacity_schedule: []
        };
        this.weekArray = [
            'Mo',
            'Tu',
            'We',
            'Th',
            'Fr',
            'Sa',
            'Su'
        ];
        this.showNewCodesInput = false;
        this.newCodesInput = '';
        this.showScheduleForm = false;
        this.scheduleRowForm = {
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
        if (cityData) {
            this.cityForm = cityData;
        }
    }
    closeDialog(cityData) {
        this.dialogRef.close(cityData);
    }
    addNewCodes(save) {
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
    removeZipCode(listIndex) {
        this.cityForm.zip_codes.splice(listIndex, 1);
    }
    addNewTimeRow() {
        this.cityForm.capacity_schedule.push(JSON.parse(JSON.stringify(this.scheduleRowForm)));
    }
    removeTimeRow(listIndex) {
        this.cityForm.capacity_schedule.splice(listIndex, 1);
    }
    submitForm() {
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
CityFormDialogComponent.ɵfac = function CityFormDialogComponent_Factory(t) { return new (t || CityFormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"])); };
CityFormDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CityFormDialogComponent, selectors: [["app-dialog-city-form"]], decls: 39, vars: 14, consts: [[1, "dialog-container"], [1, "dialog-header-wrapper", "d-flex", "align-items-center", "border-bottom"], [2, "flex", "1"], ["class", "font-weight-bold mb-0", 4, "ngIf"], [1, "dialog-secction-wrapper", 2, "padding-top", "30px"], [1, "w-100"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "placeholder", "City", 1, "font-weight-bold", 2, "font-size", "18px", 3, "ngModel", "ngModelChange"], [1, "mb-3", "d-flex", "align-items-center"], [1, "pr-2", "mr-2", "border-right"], [1, "mb-0", "font-weight-bold"], ["mat-stroked-button", "", "class", "animation pill-button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex mb-4", 4, "ngIf"], ["class", "d-flex flex-wrap", 4, "ngIf", "ngIfElse"], ["indexIsEmpty", ""], [4, "ngIf", "ngIfElse"], ["scheduleIsEmpty", ""], [1, "dialog-footer"], ["mat-stroked-button", "", 1, "animation", "pill-button", "mr-1", 2, "background", "lightgray", "border-color", "transparent", 3, "click"], ["mat-stroked-button", "", 1, "animation", "pill-button", "dark", 3, "disabled", "click"], [1, "font-weight-bold", "mb-0"], ["mat-stroked-button", "", 1, "animation", "pill-button", 3, "click"], ["mat-stroked-button", "", 1, "animation", "pill-button", "dark", 3, "click"], [1, "d-flex", "mb-4"], ["matInput", "", "placeholder", "Enter zip codes", 1, "font-weight-bold", 2, "font-size", "18px", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "font-weight-bold"], [1, "mr-1", 2, "color", "#e87700"], [1, "ml-1", 2, "color", "black"], [1, "d-flex", "flex-wrap"], ["class", "animation zip-code-pill", 4, "ngFor", "ngForOf"], [1, "animation", "zip-code-pill"], [1, "mb-0", "font-weight-bold", 2, "flex", "1"], ["icon", "times-circle", 1, "ml-2", 2, "margin-right", "-5px", "color", "#ff5151", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "background", "#d9edff", "padding", "15px", "border-radius", "5px"], [1, "mb-0", "font-weight-bold", 2, "color", "#265b94"], ["icon", "folder-open", 1, "mr-2"], [1, "d-flex", "align-items-center", 2, "height", "30px", "border-bottom", "1px solid #6c757d"], [1, "mr-2", "pr-2", "border-right", 2, "width", "300px"], [1, "mb-0", "column-header-label"], [1, "mr-2", "pr-2", "border-right", 2, "flex", "1"], [1, "d-flex", 2, "flex", "3"], ["style", "flex: 1;", "class", "mr-2 pr-2 border-right", 4, "ngFor", "ngForOf"], [2, "width", "30px"], ["class", "d-flex align-items-center", "style", "border-bottom: 1px solid #B2BBBC; height: 40px;", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 2, "border-bottom", "1px solid #B2BBBC", "height", "40px"], [1, "mr-2", "pr-2", "border-right", "d-flex", "align-items-center", 2, "width", "300px"], ["matInput", "", "type", "time", "placeholder", "00:00", 1, "font-weight-bold", 2, "font-size", "18px", 3, "ngModel", "ngModelChange"], [1, "mr-2", "ml-2", "mb-0", 2, "font-size", "18px"], ["matInput", "", "type", "number", "placeholder", "0", 1, "font-weight-bold", 2, "font-size", "18px", 3, "ngModel", "ngModelChange"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "width", "30px", "height", "30px", "cursor", "pointer", "margin-left", "-4px", 3, "click"], ["icon", "times-circle", 2, "font-size", "16px", "color", "#ff5151"], [1, "example-margin", 3, "ngModel", "checked", "ngModelChange"]], template: function CityFormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CityFormDialogComponent_h5_3_Template, 2, 0, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CityFormDialogComponent_h5_4_Template, 2, 0, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name of the city");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CityFormDialogComponent_Template_input_ngModelChange_10_listener($event) { return ctx.cityForm.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Supported zip codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CityFormDialogComponent_button_17_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CityFormDialogComponent_div_18_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CityFormDialogComponent_div_19_Template, 11, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CityFormDialogComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CityFormDialogComponent_ng_template_21_Template, 4, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Available capacity schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CityFormDialogComponent_button_29_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CityFormDialogComponent_div_30_Template, 12, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CityFormDialogComponent_ng_template_31_Template, 4, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_Template_button_click_34_listener() { return ctx.closeDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CityFormDialogComponent_Template_button_click_36_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CityFormDialogComponent_span_37_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CityFormDialogComponent_span_38_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cityData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cityData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cityForm.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showNewCodesInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNewCodesInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showNewCodesInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cityForm.zip_codes.length > 0)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showScheduleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cityForm.capacity_schedule.length > 0)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.cityForm.capacity_schedule.length === 0 || ctx.cityForm.zip_codes.length === 0 || ctx.cityForm.name === "" || ctx.savingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cityData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cityData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"]], styles: [".dialog-container[_ngcontent-%COMP%] {\n  max-height: 90vh;\n  width: 90vw;\n  max-width: 950px;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-header-wrapper[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  z-index: 10;\n  position: sticky;\n  top: 0px;\n  background-color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-footer[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.dialog-container[_ngcontent-%COMP%]   .dialog-secction-wrapper[_ngcontent-%COMP%] {\n  padding: 0px 30px;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: black;\n  background: white;\n  font-weight: 700;\n  line-height: 29px;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.dark[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .pill-button.dark.mat-button-disabled[_ngcontent-%COMP%] {\n  border-color: #646464;\n  background: #575757;\n  border-color: transparent;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 8px;\n  border: 1px solid #6c757d;\n  border-radius: 30px;\n  margin-bottom: 5px;\n  line-height: 14px;\n  cursor: pointer;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 5px;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:hover {\n  background-color: black;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:hover   h6[_ngcontent-%COMP%] {\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .zip-code-pill[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.dialog-container[_ngcontent-%COMP%]   .column-header-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2RpYWxvZy1jaXR5LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFDSTtFQUNJLGlCQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBQ1I7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBQ0k7RUFDSSx1QkFBQTtBQUNSO0FBQVE7RUFBSyxZQUFBO0FBR2I7QUFGUTtFQUFVLFlBQUE7QUFLbEI7QUFISTtFQUNJLGNBQUE7QUFLUiIsImZpbGUiOiJkaWFsb2ctY2l0eS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xuICAgIC8vIG1pbi1oZWlnaHQ6IDYwdmg7XG4gICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXgtd2lkdGg6IDk1MHB4O1xuICAgIC5kaWFsb2ctaGVhZGVyLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5kaWFsb2ctZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAuZGlhbG9nLXNlY2N0aW9uLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICB9XG4gICAgLnBpbGwtYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICAgIH1cbiAgICAucGlsbC1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAucGlsbC1idXR0b24uZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5waWxsLWJ1dHRvbi5kYXJrLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDg3LCA4NywgODcpO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuemlwLWNvZGUtcGlsbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC56aXAtY29kZS1waWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgLnppcC1jb2RlLXBpbGw6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgaDYgeyBjb2xvcjogd2hpdGU7IH1cbiAgICAgICAgZmEtaWNvbiB7IGNvbG9yOiB3aGl0ZTsgfVxuICAgIH1cbiAgICAuY29sdW1uLWhlYWRlci1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Zs0J":
/*!********************************************************************!*\
  !*** ./resources/frontend/angular/src/environments/environment.ts ***!
  \********************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Zz0B":
/*!**********************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/components/cities/cities.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var _city_form_dialog_city_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-form/dialog-city-form.component */ "RFt9");
/* harmony import */ var _delete_city_dialog_delete_city_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-city/dialog-delete-city.component */ "9/xU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/http.service */ "kMeT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "KMiY");












function CitiesComponent_div_8_div_1_div_3_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](code_r15);
} }
function CitiesComponent_div_8_div_1_div_3_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CitiesComponent_div_8_div_1_div_3_div_17_div_1_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", city_r7.zip_codes);
} }
function CitiesComponent_div_8_div_1_div_3_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Zip codes list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CitiesComponent_div_8_div_1_div_3_div_24_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](day_r19);
} }
function CitiesComponent_div_8_div_1_div_3_div_24_div_10_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", day_r22.available)("disabled", true);
} }
function CitiesComponent_div_8_div_1_div_3_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CitiesComponent_div_8_div_1_div_3_div_24_div_10_div_12_Template, 2, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](time_row_r20.time_from);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](time_row_r20.time_to);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](time_row_r20.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", time_row_r20.availability_trough_week);
} }
function CitiesComponent_div_8_div_1_div_3_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Available time frame");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Capacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CitiesComponent_div_8_div_1_div_3_div_24_div_9_Template, 3, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CitiesComponent_div_8_div_1_div_3_div_24_div_10_Template, 13, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.weekArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", city_r7.capacity_schedule);
} }
function CitiesComponent_div_8_div_1_div_3_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Capacity schedule list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CitiesComponent_div_8_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CitiesComponent_div_8_div_1_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const city_r7 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r24.openCityFormDialog(city_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CitiesComponent_div_8_div_1_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const city_r7 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r26.openDeleteCityDialog(city_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Supported zip codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CitiesComponent_div_8_div_1_div_3_div_17_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CitiesComponent_div_8_div_1_div_3_ng_template_18_Template, 4, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Available capacity schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CitiesComponent_div_8_div_1_div_3_div_24_Template, 11, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CitiesComponent_div_8_div_1_div_3_ng_template_25_Template, 4, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r7 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](city_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", city_r7.zip_codes.length > 0)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", city_r7.capacity_schedule.length > 0)("ngIfElse", _r12);
} }
function CitiesComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CitiesComponent_div_8_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.citySearchInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CitiesComponent_div_8_div_1_div_3_Template, 27, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "filterByKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.citySearchInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](4, 2, ctx_r5.cities, ctx_r5.citySearchInput, "name"));
} }
function CitiesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CitiesComponent_div_8_div_1_Template, 5, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.cities.length > 0)("ngIfElse", _r3);
} }
function CitiesComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CitiesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cities list is empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CitiesComponent {
    constructor(dialog, https) {
        this.dialog = dialog;
        this.https = https;
        this.cities = [];
        this.gettingCities = true;
        this.weekArray = [
            'Mo',
            'Tu',
            'We',
            'Th',
            'Fr',
            'Sa',
            'Su'
        ];
    }
    ngOnInit() {
        this.getCities();
    }
    getCities() {
        this.gettingCities = true;
        this.https.get('web/getCities', {}).subscribe((cities) => {
            if (cities) {
                this.cities = cities;
                this.gettingCities = false;
            }
        });
    }
    openCityFormDialog(cityData) {
        const dialogRef = this.dialog.open(_city_form_dialog_city_form_component__WEBPACK_IMPORTED_MODULE_0__["CityFormDialogComponent"], {
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
    openDeleteCityDialog(cityData) {
        const dialogRef = this.dialog.open(_delete_city_dialog_delete_city_component__WEBPACK_IMPORTED_MODULE_1__["DeleteCityDialogComponent"], {
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
CitiesComponent.ɵfac = function CitiesComponent_Factory(t) { return new (t || CitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
CitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CitiesComponent, selectors: [["app-cities"]], decls: 13, vars: 2, consts: [[1, "d-flex", "align-items-center", "pl-4", "pr-4", "border-bottom", "position-relative", "view-header-wrapper", 2, "height", "70px"], [1, "mb-0", "font-weight-bold"], [1, "pl-2", "ml-2", "border-left"], ["mat-stroked-button", "", 1, "animation", "pill-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["isLoading", ""], ["isEmpty", ""], ["placeholder", "Search city...", "autocomplete", "off", 1, "animation", "border-bottom", "search-cities-wrapper", 3, "ngModel", "ngModelChange"], [1, "list-cities"], ["class", "city-container shadow-sm", 4, "ngFor", "ngForOf"], [1, "city-container", "shadow-sm"], [1, "city-container-header", "border-bottom"], [1, "d-flex", "align-items-center", 2, "flex", "1"], [1, "pl-2", "ml-2", "border-left", "d-flex"], ["icon", "pen", 1, "mr-2", 3, "fixedWidth"], ["mat-stroked-button", "", 1, "animation", "pill-button", "danger", "ml-2", 3, "click"], ["icon", "trash", 1, "mr-2", 3, "fixedWidth"], [1, "city-container-body"], [1, "mb-3", "font-weight-bold", "section-title"], ["class", "d-flex flex-wrap", 4, "ngIf", "ngIfElse"], ["indexIsEmpty", ""], [1, "w-100"], ["scheduleIsEmpty", ""], [1, "d-flex", "flex-wrap"], ["class", "animation zip-code-pill", 4, "ngFor", "ngForOf"], [1, "animation", "zip-code-pill"], [1, "mb-0", "font-weight-bold", 2, "flex", "1"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "background", "#d9edff", "padding", "15px", "border-radius", "5px"], [1, "mb-0", "font-weight-bold", 2, "color", "#265b94"], ["icon", "folder-open", 1, "mr-2"], [1, "d-flex", "align-items-center", 2, "height", "30px", "border-bottom", "1px solid #6c757d"], [1, "mr-2", "pr-2", "border-right", "ellipsis", 2, "width", "300px"], [1, "mb-0", "column-header-label", "ellipsis", 2, "font-size", "14px", "font-weight", "400"], [1, "mr-2", "pr-2", "border-right", 2, "flex", "1"], [1, "mb-0", "column-header-label", 2, "font-size", "14px", "font-weight", "400"], [1, "d-flex", 2, "flex", "3"], ["style", "flex: 1;", "class", "mr-2 pr-2 border-right", 4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center", "style", "border-bottom: 1px solid #B2BBBC; height: 40px;", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 2, "border-bottom", "1px solid #B2BBBC", "height", "40px"], [1, "mr-2", "pr-2", "border-right", "d-flex", "align-items-center", 2, "width", "300px"], [1, "font-weight-bold", "mb-0"], [1, "mr-2", "ml-2", "mb-0"], [1, "example-margin", 3, "checked", "disabled"], [1, "spinner", "d-flex", "align-items-center", "justify-content-center", 2, "height", "calc(100vh - 70px)"], ["mode", "indeterminate", "diameter", "30", "strokeWidth", "4"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center", 2, "height", "calc(100vh - 70px)"], [1, "font-weight-bold", 2, "color", "grey"]], template: function CitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CitiesComponent_Template_button_click_6_listener() { return ctx.openCityFormDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " + Add city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CitiesComponent_div_8_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CitiesComponent_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CitiesComponent_ng_template_11_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.gettingCities)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterByKeyPipe"]], styles: [".view-header-wrapper[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 0px;\n  z-index: 10;\n  background-color: white;\n}\n\n.pill-button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: black;\n  background: white;\n  font-weight: 700;\n  line-height: 29px;\n}\n\n.pill-button.danger[_ngcontent-%COMP%] {\n  border-color: #ff5151;\n  color: #ff5151;\n}\n\n.pill-button[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: white;\n}\n\n.pill-button.danger[_ngcontent-%COMP%]:hover {\n  background: #ff5151;\n  color: white;\n}\n\n.search-cities-wrapper[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  display: block;\n  top: 70px;\n  z-index: 10;\n  width: 100%;\n  border: none;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 0px 25px;\n  outline: none;\n  height: 46px;\n  border-radius: 0px !important;\n  background: #e8e8e8;\n}\n\n.search-cities-wrapper[_ngcontent-%COMP%]:focus {\n  border-bottom: 1px solid transparent;\n  outline: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.search-cities-wrapper[_ngcontent-%COMP%]:active {\n  border-bottom: 1px solid transparent;\n  outline: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.list-cities[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.city-container[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid lightgray;\n  border-radius: 6px;\n}\n\n.city-container[_ngcontent-%COMP%]   .city-container-header[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  padding: 0px 20px;\n}\n\n.city-container[_ngcontent-%COMP%]   .city-container-body[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n}\n\n.city-container[_ngcontent-%COMP%]   .city-container-body[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #495057;\n}\n\n.city-container[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 14px;\n}\n\n.zip-code-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 8px;\n  border: 1px solid #6c757d;\n  border-radius: 30px;\n  margin-bottom: 5px;\n  line-height: 14px;\n  cursor: pointer;\n}\n\n.zip-code-pill[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 5px;\n}\n\n.column-header-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHdEQUFBO0FBT0o7O0FBTEE7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx3REFBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBVEk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFXUjs7QUFUSTtFQUNJLGtCQUFBO0FBV1I7O0FBVlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVlaOztBQVJBO0VBQ0ksbUJBQUE7QUFXSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGlCQUFBO0FBWUo7O0FBVEE7RUFDSSxjQUFBO0FBWUoiLCJmaWxlIjoiY2l0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctaGVhZGVyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5waWxsLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG4ucGlsbC1idXR0b24uZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6ICNmZjUxNTE7XG4gICAgY29sb3I6ICNmZjUxNTE7XG59XG4ucGlsbC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5waWxsLWJ1dHRvbi5kYW5nZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZjUxNTE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnNlYXJjaC1jaXRpZXMtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiA3MHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGhlaWdodDogNDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xufVxuLnNlYXJjaC1jaXRpZXMtd3JhcHBlcjpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLWNpdGllcy13cmFwcGVyOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpICFpbXBvcnRhbnQ7XG59XG4ubGlzdC1jaXRpZXMge1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG4uY2l0eS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgLmNpdHktY29udGFpbmVyLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgfVxuICAgIC5jaXR5LWNvbnRhaW5lci1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jaXR5LWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uemlwLWNvZGUtcGlsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uemlwLWNvZGUtcGlsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbHVtbi1oZWFkZXItbGFiZWwge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xufVxuIl19 */"] });


/***/ }),

/***/ "c3kv":
/*!***********************************************************************!*\
  !*** ./resources/frontend/angular/src/app/modules/material.module.ts ***!
  \***********************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]] }); })();


/***/ }),

/***/ "kMeT":
/*!*********************************************************************!*\
  !*** ./resources/frontend/angular/src/app/services/http.service.ts ***!
  \*********************************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpService {
    constructor(https) {
        this.https = https;
    }
    // tslint:disable-next-line:typedef
    get(url, params) {
        return this.https.get(url, {
            params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((err) => {
            if (err.status === 401 || err.status === 440) {
                window.location.replace('/logout');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }
            else if (!err.ok) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(false);
            }
        }));
    }
    // tslint:disable-next-line:typedef
    post(url, params) {
        return this.https.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((err) => {
            if (err.status === 401 || err.status === 440) {
                window.location.replace('/logout');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }
            else if (err.status === 422) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err.error.errors);
            }
            else if (!err.ok) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(false);
            }
        }));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mlCW":
/*!*********************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/modules/font-awesome-icons.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FontAwesomeIconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIconsModule", function() { return FontAwesomeIconsModule; });
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
// FONT AWESOME




class FontAwesomeIconsModule {
    constructor(faConfig, library) {
        faConfig.fixedWidth = true;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCity"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignOutAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolder"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolderOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSave"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faExclamationTriangle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheckCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsers"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEyeSlash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSync"]);
    }
}
FontAwesomeIconsModule.ɵfac = function FontAwesomeIconsModule_Factory(t) { return new (t || FontAwesomeIconsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FaIconLibrary"])); };
FontAwesomeIconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FontAwesomeIconsModule });
FontAwesomeIconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FontAwesomeIconsModule, { imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]], exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "pOL4":
/*!*************************************************************************!*\
  !*** ./resources/frontend/angular/src/app/services/snackbar.service.ts ***!
  \*************************************************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var _components_snackbar_snackbar_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/snackbar/snackbar-message.component */ "OcJC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class SnackbarService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    openSnackBar(processed, duration, message) {
        this.snackbar.openFromComponent(_components_snackbar_snackbar_message_component__WEBPACK_IMPORTED_MODULE_0__["SnackbarMessageComponent"], {
            duration,
            data: { processed, message }
        });
    }
    dismissSnackBar() {
        this.snackbar.dismiss();
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
SnackbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qtu1":
/*!************************************************!*\
  !*** ./resources/frontend/angular/src/main.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "PkmI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "Zs0J");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "vvQR":
/*!******************************************************************!*\
  !*** ./resources/frontend/angular/src/app/app-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/overview/overview.component */ "7zFA");
/* harmony import */ var _components_cities_cities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cities/cities.component */ "Zz0B");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clients/clients.component */ "AiND");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        component: _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_1__["OverviewComponent"]
    },
    {
        path: 'cities',
        component: _components_cities_cities_component__WEBPACK_IMPORTED_MODULE_2__["CitiesComponent"]
    },
    {
        path: 'clients',
        component: _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload',
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map