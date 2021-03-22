<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    protected $table = 'calendar';
    public $timestamps = false;

    protected $fillable = [
        'id', 'date', 'year', 'month', 'day', 'month_name', 'day_name', 'holiday', 'availability'
    ];
}