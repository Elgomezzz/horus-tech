<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'name',
        'short_description',
        'long_description',
        'price',
        'image_url',
        'quantity',
        'isOnPromotion',
        'category'
    ];
}
