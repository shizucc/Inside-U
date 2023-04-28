<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DaftarPertanyaan extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public  $timestamps = false;
    public function ciriciri_id(){
        return $this->belongsTo(CiriCiri::class);
    }
}
