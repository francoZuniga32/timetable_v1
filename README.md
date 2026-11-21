# Timetable V1

Time table es una aplicacion web que permite la carga de horarios para clases o actividades para cualquier tipo de organizacion.
Todavia estamos en una version inicial, por lo que es posible que algunas funcionalidades no esten disponibles.

## Comienzo Rapido

Puede descargar solamente el archivo `docker-compose.yml` y ejecutar el siguiente comando:

```bash
docker-compose up -d
```

Bajara las imagenes de docker para el back y front de la aplicacion.
- https://hub.docker.com/repository/docker/francozuniga32/timetable_v1-front/general
- https://hub.docker.com/repository/docker/francozuniga32/timetable_v1-backend/general

En caso de querer probar la version de desarrollo, puede descargar el archivo `docker-compose-dev.yml` y ejecutar el siguiente comando:

```bash
docker-compose -f docker-compose-dev.yml up -d
```

Puede probar las funcionalidades y en caso de querer dejar algun comentario lo invito a crear una issue para poder mejorar este proyecto.

## Stack

Idealmente contado con nodejs instalado en su sistema, para poder ejecutar el front y el back.
Frontend:
- Astro.build como framework SSR. En la imagen docker utilizamos nginx para poder levantar el servidor web.

Backend
- Nodejs
- Expressjs
- JWT
- Sequelize ORM - Sequelize CLI.
- Etc.

