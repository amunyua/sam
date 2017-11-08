<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_menus', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id')->unsigned();
            $table->foreign("product_id")
                ->references("id")
                ->on('products')
                ->onUpdate('cascade');
            $table->integer('uom')->unsigned()->nullable();
            $table->foreign('uom')
                ->references('id')
                ->on('uoms');
            $table->string('description');
            $table->double('price')->nullable();
            $table->boolean('status')->default(1);
            $table->integer('created_by')->nullable()->unsigned();
            $table->integer('store_id')->unsigned();
            $table->foreign('store_id')
                ->references('id')
                ->on('stores');
            $table->integer('product_menu_cat')->unsigned();
            $table->foreign('product_menu_cat')
                ->references("id")
                ->on("product_menu_categories");

            $table->softDeletes();
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
        Schema::dropIfExists('product_menus');
    }
}
