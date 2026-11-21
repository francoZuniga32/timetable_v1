# datos del front
FROM node:26-alpine3.23 AS build

WORKDIR /app_front
COPY ./front/package*.json ./
RUN npm install
COPY ./front .
RUN npm run build

FROM node:20-alpine AS runtime
RUN apk add --no-cache nginx

COPY ./front/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app_front/dist /usr/share/nginx/html
RUN mv /usr/share/nginx/html/_astro /usr/share/nginx/html/astro
RUN find /usr/share/nginx/html -type f -name "*.html" -exec sed -i 's/\/_astro\//\/astro\//g' {} +
EXPOSE 80

# datos del back
WORKDIR /app_back
COPY ./back/package*.json ./
RUN npm ci --only=production
COPY ./back .
EXPOSE 3000
CMD ["node", "src/index.js"]