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
        $orders = Order::where('id', $request->city_id)
        ->get()
        ->map(function($order) {
            unset($order->{"client_uuid"});
            return $order;
        });

        return $orders;
    }
}
