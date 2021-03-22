<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'clients';
    public $timestamps = true;

    protected $fillable = [
        'uuid', 'name', 'api_token', 'created_at', 'updated_at'
    ];
}
