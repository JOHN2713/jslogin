# Aplicación de Inicio de Sesión Express.js con Docker

Esta es una aplicación de inicio de sesión básica construida con Express.js y empaquetada en un contenedor de Docker.

## Descripción

La aplicación proporciona una interfaz web simple donde los usuarios pueden iniciar sesión. El formulario de inicio de sesión se encuentra en la ruta raíz (`/`) y la autenticación se maneja en la ruta `/login`.

En la versión actual, las credenciales de inicio de sesión están hardcodeadas (`usuario: 'admin', contraseña: '1234'`), pero en una aplicación real deberían almacenarse de manera segura.

## Requisitos

- Node.js (versión 16 o superior)
- Docker (opcional, si quieres ejecutar la aplicación en un contenedor)

## Instalación y Ejecución

### Ejecutar localmente

1. Clona el repositorio: git clone https://github.com/tu-usuario/app-login-express.git
2. Instala las dependencias:
cd app-login-express
npm install
3. Inicia la aplicación:
node app.js
4. Abre tu navegador y ve a `http://localhost:3000`.

### Ejecutar en Docker

1. Construye la imagen de Docker:
docker build -t app-login-express .

2. Ejecuta el contenedor:
docker run -p 3000:3000 app-login-express

3. Abre tu navegador y ve a `http://localhost:3000`.

## Estructura del Proyecto

- `app.js`: Código principal de la aplicación Express.js.
- `Dockerfile`: Archivo de configuración para empaquetar la aplicación en un contenedor de Docker.
- `README.md`: Este archivo de documentación.

## Mejoras Futuras

- Implementar un almacenamiento de credenciales más seguro (por ejemplo, base de datos).
- Agregar funcionalidad adicional, como páginas protegidas solo para usuarios autenticados.
- Mejorar la seguridad de la aplicación (HTTPS, prevención de ataques CSRF, etc.).
- Agregar pruebas unitarias y de integración.
