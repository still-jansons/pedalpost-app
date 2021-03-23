<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

use App\Models\Client;

class ApiTokenCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // $client = Client::where([
        //     ['uuid', json_decode($request->getContent())->uuid]
        // ])
        // ->get('api_token')
        // ->first();

        // if(Crypt::decryptString($client->api_token) === $request->bearerToken()) {
        //     return $next($request);
        // }
        // return dd('Warning: Unauthorized action.');
        return $next($request);
    }
}
