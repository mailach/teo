FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn add glob rimraf

RUN yarn install --only=development

COPY . .

RUN yarn run build
