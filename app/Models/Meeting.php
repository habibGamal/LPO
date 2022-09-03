<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;
    public $fillable = [
        'name',
        'link',
        'date',
        'state',
        'assets',
    ];

    public $timestamps = false;
}
