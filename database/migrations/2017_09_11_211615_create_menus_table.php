<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('menu_name')->nullable();
            $table->integer('parent_menu')->unsigned()->nullable();
            $table->foreign('parent_menu')
                ->references('id')
                ->on('menus')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->integer('route_id')->unsigned();
            $table->foreign('route_id')
                ->references('id')
                ->on('routes')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->integer('sequence');
            $table->boolean('menu_status')->default(1);
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
        Schema::dropIfExists('menus');
    }
}
