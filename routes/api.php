<?php

use App\Course;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

// Get request for all the courses
Route::get('courses', function () {
  return Course::all();
});

// Get request for single course, by id
Route::get('courses/{id}', function ($id) {
  return Course::find($id);
});

// Not sure if we want to pass a user_id through url?????? Watch andre madarang - part11 (05:25) - probably need to set up back end auth NOW - because these routes will change when we can access the logged in user, with auth()->user()->id


// Route::get('roadmap/{user_id}', 'RoadmapCourseController@index');

Route::get('roadmap', 'RoadmapCourseController@index');
Route::post('roadmap', 'RoadmapCourseController@store');
Route::patch('roadmap/{roadmapcourse}', 'RoadmapCourseController@update');
Route::delete('roadmap/{roadmapcourse}', 'RoadmapCourseController@destroy');
