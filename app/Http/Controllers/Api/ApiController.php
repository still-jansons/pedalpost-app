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

    public function getAvailableDates(Request $request)
    {
        $body = json_decode($request->getContent());

        $response = [
            'we_deliver_here' => 0,
            'dates' => []
        ];

        // Checking if zip code exist
        $city = City::where([
            ['zip_codes', 'like', "%{$body->zip_code}%"]
        ])
        ->get([
            'id',
            'name',
            'schedule_trough_week'
        ])
        ->first();
        // 
        
        $city->schedule_trough_week = json_decode($city->schedule_trough_week);
        if($city) {
            $response['we_deliver_here'] = 1;
            // Getting next 7 dates from now
            $dates = Calendar::where([
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
                'year',
                'day_of_week'
            ]);
            // 
            foreach ($dates as $date) {
                foreach($city->schedule_trough_week->{$date->day_of_week} as $time_frame) {
                    // Getting count for specific time frame
                    $orders_at_specific_time = Order::where([
                        ['city_id', $city->id],
                        ['date_id', $date->date_id],
                        ['time_id', $time_frame->time_id]
                    ])->count();
                    // 
                    if ($orders_at_specific_time < $time_frame->capacity) {
                        array_push($response['dates'], [
                            'date_id' => $date->date_id,
                            'day' => $date->day,
                            'day_name' => $date->day_name,
                            'month_name' => $date->month_name,
                            'month_name' => $date->year,
                            'date_string' => $date->day_name . ' ' . $date->day . ' ' . $date->month_name . ', ' . $time_frame->time_from . ' - ' . $time_frame->time_to,
                            'time_id' => $time_frame->time_id,
                            'time_from' => $time_frame->time_from,
                            'time_to' => $time_frame->time_to,
                            'zip_code' => $body->zip_code
                        ]);
                    }
                }
            }
        }
        return $response;
    }

    public function createOrder(Request $request)
    {
        $body = json_decode($request->getContent());
        $city = City::where([
            ['zip_codes', 'like', "%{$body->zip_code}%"]
        ])
        ->get([
            'id',
            'schedule_trough_week'
        ])
        ->first();
        $city->schedule_trough_week = json_decode($city->schedule_trough_week);

        if ($city) {
            $orders_at_specific_time = Order::where([
                ['city_id', $city->id],
                ['date_id', $body->date_id],
                ['time_id', $body->time_id]
            ])->count();
            $day_of_week = Calendar::where('id', $body->date_id)->pluck('day_of_week')->first();
            foreach($city->schedule_trough_week->{$day_of_week} as $option) {
                if ($option->time_id == $body->time_id) {
                    if ($orders_at_specific_time < $option->capacity) {
                        $order = new Order;
                        $order->client_uuid = $body->uuid;
                        $order->zip_code = $body->zip_code;
                        $order->city_id = $city->id;
                        $order->date_id = $body->date_id;
                        $order->time_id = $body->time_id;
                        $order->save();
                        return [
                            'error' => 0,
                            'message' => 'Congratulations, your order is saved successfully.'
                        ];
                    } else {
                        return [
                            'error' => 1,
                            'message' => 'Sorry, but delivery time or date is not available anymore. Please choose different time or date.'
                        ];
                    }
                    break;
                }
            }
        }
        return [
            'error' => 1,
            'message' => 'Sorry, something went wrong. Please try again.',
        ];
    }
}
