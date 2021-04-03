<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Order;

class OrderController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {}

    public function getCityOrders(Request $request) {
        $orders = Order::where('city_id', $request->city_id)
        ->get()
        ->map(function($order) {
            unset($order->{"client_uuid"});
            return $order;
        });

        return $orders;
    }

    public function getOrdersByDate(Request $request) {
        $categorized_orders = [];
        $orders = Order::whereIn('date_id', json_decode($request->dates))
        ->get();

        foreach ($orders as $order) {
            if (!array_key_exists($order->date_id, $categorized_orders)) {
                $categorized_orders[$order->date_id] = [];
            }
            if (!array_key_exists($order->city_id, $categorized_orders[$order->date_id])) {
                $categorized_orders[$order->date_id][$order->city_id] = [];
            }
            array_push($categorized_orders[$order->date_id][$order->city_id], $order);
        }

        return $categorized_orders;
    }
}
