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
  // public function index()
  // {
  //   return RoadmapCourse::where('user_id', auth()->user()->id)->get();
  // }
  // public function index($id)
  // {
  //   return RoadmapCourse::where('user_id', $id)->get();
  // }

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
    $data = $request->validate([
      // 'user_id' => 'required|integer',
      // 'course_id' => 'required|integer',
      // 'stage' => 'required|integer',
      // 'title' => 'required|string',
      // 'creator' => 'required|string',
      // 'url' => 'required|string',
      // 'hours' => 'required',
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
    $roadmapcourse->delete();

    return response('Deleted Roadmap Course', 200);
  }
}
