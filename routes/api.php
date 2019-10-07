<?php

use App\Course;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoadmapCourseController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function() {
  
  Route::get('/user', function (Request $request) {
    return $request->user();
  });
  
  Route::get('roadmap', 'RoadmapCourseController@index');
  Route::post('/logout', 'AuthController@logout');
});

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');

// Get request for all the courses
Route::get('courses', function () {
  return Course::all();
});

// Get request for single course, by id
Route::get('courses/{id}', function ($id) {
  return Course::find($id);
});


Route::post('roadmap', 'RoadmapCourseController@store');
Route::patch('roadmap/{roadmapcourse}', 'RoadmapCourseController@update');
Route::delete('roadmap/{roadmapcourse}', 'RoadmapCourseController@destroy');
