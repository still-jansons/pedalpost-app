<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Calendar;

class CalendarController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function __construct() {}

    public function getDates(Request $request) {
        return Calendar::where([
            ['date', '>=', date("Y-m-d")]
        ])
        ->limit($request->days_limit)
        ->get([
            'id as date_id',
            'date',
            'day_name',
            'day_of_week',
            'month_name',
            'day',
            'month',
            'year'
        ])->map(function($date) {
            $date->orders = (object)[];
            $date->orders_summary = (object)[];
            return $date;
        });
    }
}
