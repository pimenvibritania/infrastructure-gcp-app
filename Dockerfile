# Stage 1: Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

# RUN npm run migrate

# RUN npm run seed

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["npm", "start"]
