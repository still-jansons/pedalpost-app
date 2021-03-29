<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Calendar;
use App\Models\City;
use App\Models\Order;

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

    public function createOrder(Request $request)
    {
        $body = json_decode($request->getContent());
        $city = City::where([
            ['zip_codes', 'like', "%{$body->zip_code}%"]
        ])
        ->get('id')
        ->first();

        $order = new Order;
        $order->client_uuid = $body->uuid;
        $order->zip_code = $body->zip_code;
        $order->city_id = $city->id;
        $order->date_id = $body->date_id;
        $order->time_id = $body->time_id;
        $response = $order->save();

        return $response;
    }
}
