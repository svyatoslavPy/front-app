FROM node:16 AS build

WORKDIR /app

COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json

RUN npm ci

COPY ./ ./

RUN npm run build

# production environment
FROM docker.io/library/nginx:1.19.7-alpine
COPY --from=build /app/build /var/www

COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
