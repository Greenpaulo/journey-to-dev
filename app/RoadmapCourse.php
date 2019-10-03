<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoadmapCourse extends Model
{

  protected $fillable = [
    'user_id', 'course_id', 'stage', 'title', 'creator', 'url', 'hours', 'completed'
  ];


  protected $hidden = [
    'created_at', 'updated_at'
  ];
}
