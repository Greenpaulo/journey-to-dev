<?php

namespace App\Http\Controllers;

use App\RoadmapCourse;
use Illuminate\Http\Request;

class RoadmapCourseController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {

  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $data = $request->validate([
      'user_id' => 'required|integer',
      'course_id' => 'required|integer',
      'stage' => 'required|integer',
      'title' => 'required|string',
      'creator' => 'required|string',
      'url' => 'required|string',
      'hours' => 'required',
      'completed' => 'required|boolean'
    ]);

    $roadmapcourse = RoadmapCourse::create($data);

    return response($roadmapcourse, 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }


  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\RoadmapCourse $roadmapcourse
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, RoadmapCourse $roadmapcourse)
  {
    // Check that the roadmapcourse belongs to the user
    if ($roadmapcourse->user_id !== auth()->user()->id){
      return response()->json('Unauthorised', 401);
    }

    $data = $request->validate([
      'course_id' => 'required',
      'completed' => 'required|boolean'
    ]);

    $roadmapcourse->update($data);

    return response($roadmapcourse, 200);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  RoadmapCourse $roadmapcourse
   * @return \Illuminate\Http\Response
   */
  public function destroy(RoadmapCourse $roadmapcourse)
  {
    // Check that the roadmapcourse belongs to the user
    if ($roadmapcourse->user_id !== auth()->user()->id) {
      return response()->json('Unauthorised', 401);
    }

    $roadmapcourse->delete();

    return response('Deleted Roadmap Course', 200);
  }
}
