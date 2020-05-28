<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_stock'); 
            $table->char('status',1)->default('A'); //A ativo / I inativo 
            $table->string('condominium',2);
            $table->string('block',2)->nullable();
            $table->string('number',5);
            $table->string('street',50)->nullable();
            
            $table->foreign('id_stock')->references('id')->on('stocks');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
