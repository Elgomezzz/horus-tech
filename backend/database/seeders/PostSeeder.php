<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Limpia la tabla para evitar duplicados si se corre varias veces
        Post::truncate();

        // Buscamos al primer usuario para asignarlo como autor
        $author = User::first();

        if (!$author) {
            $this->command->error('No hay usuarios en la base de datos para asignar como autor. Por favor, crea un usuario primero.');
            return;
        }

        $posts = [
            [
                'title' => '5 Razones para Migrar tu Negocio a la Nube',
                'body' => 'La computación en la nube ofrece una flexibilidad sin precedentes. Aquí te explicamos por qué tu empresa debería considerar dar el salto a plataformas como AWS o Azure para mejorar la escalabilidad, seguridad y reducir costos operativos.',
                'image_url' => 'https://picsum.photos/seed/blog1/400/300',
            ],
            [
                'title' => 'La Importancia de un Sitio Web Corporativo Moderno',
                'body' => 'En la era digital, tu sitio web es tu carta de presentación más importante. Un diseño profesional, responsivo y rápido no es un lujo, es una necesidad para generar confianza y captar nuevos clientes. Descubre las claves para un sitio web exitoso.',
                'image_url' => 'https://picsum.photos/seed/blog2/400/300',
            ],
            [
                'title' => 'SEO para Principiantes: Cómo Aparecer en Google',
                'body' => 'El Posicionamiento en Buscadores (SEO) es fundamental para que tus clientes te encuentren. Te guiamos a través de los conceptos básicos: palabras clave, optimización de contenido y la importancia de los enlaces para empezar a escalar posiciones en Google.',
                'image_url' => 'https://picsum.photos/seed/blog3/400/300',
            ],
        ];

        foreach ($posts as $post) {
            Post::create([
                'user_id' => $author->id,
                'title' => $post['title'],
                'slug' => Str::slug($post['title']),
                'body' => $post['body'],
                'image_url' => $post['image_url'],
                'published_at' => now()
            ]);
        }
    }
}