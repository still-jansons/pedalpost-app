<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Pedalpost | Login</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="/images/pedalpost_circle_white.svg">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="/assets/angular/styles.css">
</head>

<body>
    <div class='container d-flex align-items-center' style='height: 100vh;'>
        <div class='row w-100'>
            <div class='col-lg-5 offset-lg-4 col-md-8 offset-md-2 col-sm-12'>
                <div class='d-flex w-100 align-items-center mb-3'>
                    <img style='margin-left: -10px;' class="logo" src="{{ asset('images/pedalpost_horizontal.svg') }}" alt="Pedalpost" height='64px'>
                </div>
                <hr>
                <form action="{{ route('auth.check') }}" method='post'>
                    @csrf
                    <div class='results'>
                        @if(Session::get('fail'))
                            <div class="alert alert-danger">
                                {{ Session::get('fail') }}
                            </div>
                        @endif
                    </div>
                    <div class='form-group'>
                        <label for='email'>Email</label>
                        <input type='text' class='form-control font-weight-bold' style='color: #000;' name='email' placeholder="Enter email">
                        <span class='text-danger'>@error('email'){{ $message }} @enderror</span>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" class='form-control font-weight-bold' style='color: #000;' placeholder="Enter password">
                        <span class='text-danger'>@error('password'){{ $message }} @enderror</span>
                    </div>
                    <div class="form-group">
                        <button type='submit' class='btn btn-block' style='background: black; color: white;'>Login</button>
                    </div>
                    <br>
                    <!-- <a href='register'>Register</a> -->
                </form>
            </div>
        </div>
    </div>
</body>

</html>