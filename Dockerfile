FROM node:12-alpine

RUN npm i -g yarn npx

WORKDIR /var/app

EXPOSE 3000