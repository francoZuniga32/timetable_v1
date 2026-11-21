FROM node:26-alpine3.23 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN mv /usr/share/nginx/html/_astro /usr/share/nginx/html/astro
RUN find /usr/share/nginx/html -type f -name "*.html" -exec sed -i 's/\/_astro\//\/astro\//g' {} +
EXPOSE 80
