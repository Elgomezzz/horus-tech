# Horus Tech - Plataforma de Servicios Tecnológicos

Horus Tech es una aplicación web full-stack diseñada para una agencia de tecnología. Presenta un portafolio de servicios y un blog al público, y cuenta con un panel de administración seguro para la gestión de todo el contenido.

---

## Descripción del Proyecto

Este proyecto consiste en una aplicación de página única (SPA) construida con **React** para el frontend y una **API RESTful** robusta desarrollada con **Laravel** para el backend.

La plataforma cuenta con dos áreas principales:
1.  **Sitio Público:** Donde los visitantes pueden explorar los diferentes servicios tecnológicos, leer artículos de interés en el blog y solicitar una cotización a través de un formulario dinámico.
2.  **Panel de Administración:** Una sección protegida por login donde el administrador tiene control total sobre el contenido del sitio. Esto incluye la gestión completa (CRUD) de los servicios y de los artículos del blog, así como la capacidad de actualizar su propio perfil.

---

## Funcionalidades Principales

### Sitio Público
* **Página de Inicio:** Un landing page moderno con un "Hero Section", servicios destacados y llamados a la acción.
* **Sección de Servicios:** Catálogo completo con páginas de detalle para cada servicio.
* **Sección de Blog:** Listado de artículos con páginas de detalle para lectura.
* **Formulario de Cotización:** Un formulario dinámico para que los clientes potenciales soliciten proyectos.

### Panel de Administración
* **Autenticación Segura:** Sistema de Login/Logout para administradores.
* **Dashboard Central:** Vista principal con tablas que resumen los servicios y posts existentes.
* **CRUD de Servicios:** Funcionalidad completa para Crear, Leer, Actualizar y Borrar servicios.
* **CRUD de Blog:** Funcionalidad completa para Crear, Leer, Actualizar y Borrar artículos del blog.
* **Gestión de Perfil:** Página para que el administrador actualice sus propios datos.

---

## Tecnologías Utilizadas

* **Frontend:** React, React Router, Axios, Bootstrap
* **Backend:** Laravel, Laravel Sanctum
* **Base de Datos:** MySQL
* **Entorno:** PHP, Node.js, Composer

---

## Empezando

Sigue estos pasos para configurar y levantar el entorno de desarrollo en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado el siguiente software:
* PHP (versión 8.1+)
* Composer
* Node.js & npm (versión 18+)
* Un servidor de base de datos MySQL

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
# Abre el archivo .env y modifica las siguientes líneas con tus credenciales:
# DB_DATABASE=horus_db
# DB_USERNAME=root
# DB_PASSWORD=TuContraseña

# 6. Crea la base de datos 'horus_db' en tu gestor de MySQL (MySQL Workbench).

# 7. Ejecuta las migraciones para crear todas las tablas (users, services, posts, etc.)
php artisan migrate

# 8. Puebla la base de datos con datos de ejemplo (opcional, pero recomendado)
# Puedes usar los scripts SQL que te proporcioné anteriormente.

# 9. Crea tu usuario administrador
# Ejecuta 'php artisan tinker' y luego pega el siguiente comando:
App\Models\User::create(['name' => 'Admin', 'email' => 'admin@example.com', 'password' => Illuminate\Support\Facades\Hash::make('password')]);

```
#### 2. Frontend (React)

Ahora, configura la aplicación de React.

```bash
# 1. Navega a la carpeta del frontend
cd horus-parts-frontend

# 2. Instala las dependencias de Node.js
npm install
```



### Cómo Levantar el Proyecto
Para correr la aplicación, necesitarás dos terminales separadas.

Terminal 1: Iniciar el Backend


```bash
# Ve a la carpeta del backend
cd horus-tech-backend

# Inicia el servidor de Laravel
php artisan serve
Tu API estará corriendo en http://127.0.0.1:8000

Terminal 2: Iniciar el Frontend

```


```bash

# Ve a la carpeta del frontend
cd horus-parts-frontend

# Inicia el servidor de desarrollo de React
npm start
Tu aplicación web estará accesible en http://localhost:3000

```

Credenciales de Administrador
Una vez levantado el proyecto, puedes acceder al panel de administración usando las siguientes credenciales:

Email: admin@example.com

Contraseña: password