<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    protected $fillable = [
        'client_name',
        'client_email',
        'service_id',
        'project_details',
        'has_domain',
        'status'
    ];
}
