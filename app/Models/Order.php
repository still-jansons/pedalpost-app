<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    public $timestamps = true;

    protected $fillable = [
        'id', 'client_uuid', 'city_id', 'zip_code', 'time_id', 'date_id', 'created_at', 'updated_at'
    ];
}
