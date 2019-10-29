<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
      <meta charset="utf-8">
      <meta name="csrf-token" content="{{csrf_token()}}">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/css/app.css">
      <title>Journey To Dev</title>
  </head>

  <body>
    <div id="app">
      <app></app>
    </div>

  <script src="{{ asset('js/app.js') }}"></script>
  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/19f3b0514f.js"></script>
  </body>

</html>
