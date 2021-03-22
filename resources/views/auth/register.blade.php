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
    <div class='container'>
        <div class='row' style='margin-top: 45px;'>
            <div class='col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-12'>
                <h4>New user form</h4>
                <hr>
                <form action="{{ route('auth.create') }}" method='post'>
                    @csrf
                    <div class='results'>
                        @if(Session::get('success'))
                            <div class="alert alert-success">
                                {{ Session::get('success') }}
                            </div>
                        @endif
                        @if(Session::get('fail'))
                            <div class="alert alert-danger">
                                {{ Session::get('fail') }}
                            </div>
                        @endif
                    </div>
                    <div class='form-group'>
                        <label for='name'>Full name</label>
                        <input type='text' class='form-control' name='name' placeholder="Enter full name" value='{{ old("name") }}'>
                        <span class='text-danger'>@error('name'){{ $message }} @enderror</span>
                    </div>
                    <div class='form-group'>
                        <label for='email'>Email</label>
                        <input type='text' class='form-control' name='email' placeholder="Enter email" value='{{ old("email") }}'>
                        <span class='text-danger'>@error('email'){{ $message }} @enderror</span>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" class='form-control' placeholder="Enter password">
                        <span class='text-danger'>@error('password'){{ $message }} @enderror</span>
                    </div>
                    <div class="form-group">
                        <button type='submit' class='btn btn-block btn-primary'>Register</button>
                    </div>
                    <br>
                    <a href='login'>I already have account</a>
                </form>
            </div>
        </div>
    </div>
</body>

</html>