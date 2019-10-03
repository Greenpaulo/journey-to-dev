<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoadmapCoursesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('roadmap_courses', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->integer('user_id');
      $table->integer('course_id');
      $table->integer('stage');
      $table->string('title');
      $table->string('creator');
      $table->string('url');
      $table->float('hours');
      $table->boolean('completed')->default(false);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('roadmap_courses');
  }
}
