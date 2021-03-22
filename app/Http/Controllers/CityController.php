<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\City;

class CityController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {}

    public function getCities(Request $request) {
        return City::get()->map(function($city) {
            $city->zip_codes = json_decode($city->zip_codes);
            $city->capacity_schedule = json_decode($city->capacity_schedule);
            return $city;
        });
    }

    public function updateOrCreateCity(Request $request) {
        $city_name = $request->get('city_name');
        $zip_codes = $request->get('zip_codes');
        $time_capacity = $request->get('time_capacity');
        $city_id = $request->get('id');

        $schedule_trough_week = [
            1 => [],
            2 => [],
            3 => [],
            4 => [],
            5 => [],
            6 => [],
            7 => []
        ];

        foreach (json_decode($time_capacity) as $row) {
            foreach ($row->availability_trough_week as $day_of_week) {
                if ($day_of_week->available) {
                    array_push($schedule_trough_week[$day_of_week->day_number], [
                        'capacity' => $row->capacity,
                        'current_cpacity' => $row->capacity,
                        'time_from' => $row->time_from,
                        'time_to' => $row->time_to,
                        'time_id' => $row->time_id
                    ]);
                }
            }
        }

        return City::updateOrCreate(
            ['id' => $city_id],
            [
                'name' => $city_name,
                'zip_codes' => $zip_codes,
                'capacity_schedule' => $time_capacity,
                'schedule_trough_week' => json_encode($schedule_trough_week)
            ]
        );
    }

    public function deleteCity(Request $request) {
        return City::where('id', $request->get('city_id'))->delete();
    }
}
