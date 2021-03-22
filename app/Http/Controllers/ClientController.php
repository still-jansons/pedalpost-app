<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;

use App\Models\Client;

class ClientController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {}

    public function getClients(Request $request) {
        return Client::orderBy('name', 'asc')
        ->get([
            'uuid',
            'name',
            'created_at',
            'updated_at'
        ])->map(function($client) {
            $client->uuid = $client->uuid;
            return $client;
        });
    }

    public function createClient(Request $request) {
        $api_token = Str::random(40);
        $uuid = Str::uuid();

        $client = new Client;
        $client->uuid = $uuid;
        $client->name = $request->name;
        $client->api_token = Crypt::encryptString($api_token);
        $client->save();
    }

    public function updateClientName(Request $request) {
        Client::where('uuid', Crypt::encryptString($request->uuid))
        ->update([
            'api_token' => $request->name
        ]);

    }

    public function updateClientToken(Request $request) {
        $api_token = Str::random(40);

        Client::where('uuid', $request->uuid)
        ->update([
            'api_token' => Crypt::encryptString($api_token)
        ]);
    }

    public function getClientsToken(Request $request) {
        return Client::where('uuid', $request->uuid)
        ->get('api_token')->map(function($client) {
            $client->api_token = Crypt::decryptString($client->api_token);
            return $client;
        })->first();
    }

}
