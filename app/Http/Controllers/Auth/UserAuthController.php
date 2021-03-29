<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

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
    
    // function logout() 
    // {
    //     if(session()->has('LoggedUser')) {
    //         session()->pull('LoggedUser');
    //         return redirect('login');
    //     }
    // }
    public function logout(Request $request)
    {
        Auth::logout();
    
        $request->session()->invalidate();
    
        $request->session()->regenerateToken();
    
        return redirect('login');
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

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('overview');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    function getLoggedUser() 
    {
        if (Auth::user()) {
            return [
                'email' => Auth::user()->email,
                'name' => Auth::user()->name
            ];
        }
    }
}
