<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CiriCiri extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public  $timestamps = false;
    public function kepribadian(){
        return $this->belongsTo(Kepribadian::class);
    }
    public function pertanyaan(){
        return $this->hasOne(DaftarPertanyaan::class);
    }
}
