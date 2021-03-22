<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'cities';
    public $timestamps = false;

    protected $fillable = [
        'id', 'name', 'zip_codes', 'capacity_schedule', 'schedule_trough_week'
    ];
}