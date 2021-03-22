<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Calendar;
use App\Models\City;

class ApiController extends Controller
{
    public function __construct()
    {}

    public function checkCityZip(Request $request)
    {
        $body = json_decode($request->getContent());
        $city = City::where([
            ['zip_codes', 'like', "%{$body->zip_code}%"]
        ])
        ->get('name')
        ->first();

        if($city) {
            return 1;
        } else {
            return 0;
        }

    }

    public function getDates(Request $request)
    {
        return Calendar::where([
            ['date', '>', date("Y-m-d")],
            ['holliday', 0]
        ])
        ->limit(7)
        ->get([
            'id as date_id',
            'day_name',
            'month_name',
            'day',
            'month',
            'year'
        ]);
    }

    public function getAvailableTimes(Request $request)
    {
        return json_decode($request->getContent());
    }
}
