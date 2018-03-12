<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('order_id')->unsigned();
            $table->string('txn_code');
            $table->string('ipay_status');
            $table->string('status_meaning');
            $table->string('invoice_number');
            $table->string('registered_name')->nullable();
            $table->string('registered_number')->nullable();
            $table->string('channel');
            $table->integer('store_id')->unsigned();
            $table->double('amount_to_be_paid');
            $table->double('total_paid');
            $table->double('short');
            $table->double('excess');
            $table->boolean('complete')->default(false);
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
        Schema::dropIfExists('payments');
    }
}
