<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('daftar_pertanyaans', function (Blueprint $table) {
            $table->id();
            $table->string('pertanyaan');
            $table->bigInteger('ciri_id')->unsigned();
            $table->foreign('ciri_id')->references('id')->on('ciri_ciris')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daftar_pertanyaans');
    }
};
