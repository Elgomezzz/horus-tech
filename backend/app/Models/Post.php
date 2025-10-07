<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'title', 'slug', 'body', 'image_url', 'published_at'
    ];

    // Relación para obtener el autor del post
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}