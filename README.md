# Time Table v1

Time Table es una aplicación web desarrollada con Astro para proporcionar una forma sencilla de mostrar un tablón de horarios.
## Instalación

1. Configurar el backend

Descarga el servidor backend de Timetable Back y ejecútalo con los siguientes comandos:

```bash
npm install
node src/index.js
```

Por defecto, el servidor se ejecutará en el puerto 3000. Puedes cambiarlo en las variables de entorno del proyecto.

2. Configurar el frontend

En este proyecto, edita el archivo .env y asegúrate de configurar correctamente la URL del backend:

```bash
PUBLIC_BACKEND=http://localhost:3000
```

Luego, inicia el entorno de desarrollo con:

```bash
npm run dev
```

También puedes compilar la aplicación de Astro y desplegarla en un servidor web.
## Uso con Docker Compose

Si tienes Docker y Docker Compose instalado, puedes desplegar tanto el backend como el frontend fácilmente.
Pasos:

1. Descarga Timetable Back.
2. Modifica los archivos `.env` y `docker-compose.yml` en ambos proyectos según tus necesidades (por ejemplo, configurando los puertos).
3. En cada proyecto, ejecuta:

```bash
docker-compose up -d
```

Esto iniciará ambos servicios en segundo plano, permitiéndote probar Time Table sin necesidad de configuraciones manuales adicionales.