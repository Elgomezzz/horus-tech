# Horus Tech - Plataforma de Servicios Tecnológicos

Horus Tech es una aplicación web full-stack diseñada para una agencia de tecnología. Presenta un portafolio de servicios al público y cuenta con un panel de administración seguro para la gestión de contenido.

---

## Descripción del Proyecto

Este proyecto consiste en una aplicación de página única (SPA) construida con **React** para el frontend y una **API RESTful** robusta desarrollada con **Laravel** para el backend.

La plataforma cuenta con dos áreas principales:
1.  **Sitio Público:** Donde los visitantes pueden explorar los diferentes servicios tecnológicos ofrecidos (Desarrollo Web, Consultoría en la Nube, etc.), ver detalles y solicitar una cotización a través de un formulario dinámico.
2.  **Panel de Administración:** Una sección protegida por login donde el administrador puede gestionar todo el ciclo de vida de los servicios (Crear, Leer, Actualizar y Borrar - CRUD), así como actualizar su propio perfil.

---

## Tecnologías Utilizadas

* **Frontend:** React, React Router, Axios
* **Backend:** Laravel, Laravel Sanctum
* **Base de Datos:** MySQL
* **Estilos:** Bootstrap, CSS Personalizado

---

## Empezando

Sigue estos pasos para configurar y levantar el entorno de desarrollo en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado el siguiente software:
* [PHP](https://www.php.net/) (versión 8.1+)
* [Composer](https://getcomposer.org/)
* [Node.js & npm](https://nodejs.org/) (versión 18+)
* Un servidor de base de datos [MySQL](https://www.mysql.com/)

### Instalación

#### 1. Backend (Laravel)

Primero, configura el servidor de Laravel.

```bash
# 1. Navega a la carpeta del backend
cd horus-tech-backend

# 2. Instala las dependencias de PHP
composer install

# 3. Copia el archivo de configuración de entorno
cp .env.example .env

# 4. Genera la clave de la aplicación
php artisan key:generate

# 5. Configura tu base de datos
# Abre el archivo .env y modifica las siguientes líneas con tus credenciales de MySQL:
# DB_DATABASE=horus_tech_db
# DB_USERNAME=root
# DB_PASSWORD=TuContraseña

# 6. Crea la base de datos 'horus_tech_db' en tu gestor de MySQL (MySQL Workbench).

# 7. Ejecuta las migraciones para crear las tablas
php artisan migrate

# 8. Puebla la base de datos con los servicios iniciales
php artisan db:seed

# 9. Crea tu usuario administrador (si el seeder no lo incluye)
# Ejecuta 'php artisan tinker' y luego pega el siguiente comando:
# App\Models\User::create(['name' => 'Admin', 'email' => 'admin@example.com', 'password' => Illuminate\Support\Facades\Hash::make('password')]);