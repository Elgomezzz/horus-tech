<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    // READ (Obtener todos)
    public function index()
    {
        return Service::all();
    }

    // CREATE (Crear nuevo)
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'short_description' => 'required|string|max:255',
            'long_description' => 'required|string',
            'price' => 'required|numeric',
            'image_url' => 'required|url',
            'quantity' => 'required|integer',
            'isOnPromotion' => 'required|boolean',
            'category' => 'required|string|max:100',
        ]);

        $service = Service::create($validatedData);
        return response()->json($service, 201);
    }

    // READ (Obtener uno) - Ya lo teníamos
    public function show(Service $service)
    {
        return $service;
    }

    // UPDATE (Actualizar)
    public function update(Request $request, Service $service)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'short_description' => 'sometimes|required|string|max:255',
            'long_description' => 'sometimes|required|string',
            'price' => 'sometimes|required|numeric',
            'image_url' => 'sometimes|required|url',
            'quantity' => 'sometimes|required|integer',
            'isOnPromotion' => 'sometimes|required|boolean',
            'category' => 'sometimes|required|string|max:100',
        ]);

        $service->update($validatedData);
        return response()->json($service);
    }

    // DELETE (Borrar)
    public function destroy(Service $service)
    {
        $service->delete();
        return response()->json(null, 204);
    }
}