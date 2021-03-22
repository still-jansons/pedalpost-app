<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserAuthController extends Controller
{
    function login() 
    {
        return view('auth.login');
    }

    function register() 
    {
        return view('auth.register');
    }
    
    function logout() 
    {
        if(session()->has('LoggedUser')) {
            session()->pull('LoggedUser');
            return redirect('login');
        }
    }

    function createUser(Request $request) 
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|max:14'
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $query = $user->save();

        if($query) {
            return back()->with('success', 'You have been registered');
        } else {
            return back()->with('fail', 'Something went wrong, please try again');
        }
    }

    function loginUser(Request $request) 
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', '=', $request->email)->first();

        if($user) {
            if(Hash::check($request->password, $user->password)) {
                $request->session()->put('LoggedUser', $user->id);
                return redirect('/overview');
            } else {
                return back()->with('fail', 'You are not authorised to come in');
            }
        } else {
            return back()->with('fail', 'You are not authorised to come in');
        }
    }

    function getLoggedUser(Request $request) 
    {
        if(session()->has('LoggedUser')) {
            return User::where('id', '=', session('LoggedUser'))->select('email', 'name')->first();
        }
    }
}
