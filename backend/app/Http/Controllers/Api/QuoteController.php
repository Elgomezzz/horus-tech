<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quote;

class QuoteController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'client_name' => 'required|string|max:255',
            'client_email' => 'required|email|max:255',
            'service_id' => 'required|exists:services,id',
            'project_details' => 'nullable|string',
            'has_domain' => 'required|boolean',
        ]);

        $quote = Quote::create($validatedData);

        return response()->json($quote, 201); // 201 = Created
    }
}