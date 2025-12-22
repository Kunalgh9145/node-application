FROM node:22-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY app.js app.js
COPY index.js index.js
COPY tests tests

EXPOSE 3000

CMD ["npm" , "start"]

