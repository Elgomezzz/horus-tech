<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    // Muestra todos los posts publicados
    public function index()
    {
        return Post::whereNotNull('published_at')->with('author:id,name')->latest()->get();
    }

    // Muestra un post específico usando su slug
    public function show(Post $post)
    {
        return $post->load('author:id,name');
    }

    // (ADMIN) Crea un nuevo post
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'image_url' => 'nullable|url',
        ]);

        $post = Post::create([
            'user_id' => auth()->id(),
            'title' => $validatedData['title'],
            'slug' => Str::slug($validatedData['title']),
            'body' => $validatedData['body'],
            'image_url' => $validatedData['image_url'],
            'published_at' => now()
        ]);

        return response()->json($post, 201);
    }
    
    // (ADMIN) Actualiza un post
    public function update(Request $request, Post $post)
    {
        return response()->json($post);
    }

    // (ADMIN) Borra un post
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(null, 204);
    }
}