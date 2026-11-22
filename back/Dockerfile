# 1. Imagen base oficial de Node.js
FROM node:22-alpine

# 2. Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de definición de dependencias
COPY package*.json ./

# 4. Instalar las dependencias de producción
RUN npm install 

# 5. Copiar el resto del código de la aplicación
COPY . .

# 6. Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# 7. Comando para ejecutar la aplicación al iniciar el contenedor
CMD ["node", "src/index.js"]