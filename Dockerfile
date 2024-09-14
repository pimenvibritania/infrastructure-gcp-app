# Stage 1: Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

RUN chown -R node:node /app

USER node

EXPOSE 3000
