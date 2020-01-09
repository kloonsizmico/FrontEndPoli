#FROM node:12.14.1-alpine AS build
#WORKDIR /usr/src/app
#COPY package.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
#### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY --from=build /usr/src/app/dist/FrontEnd /usr/share/nginx/html
#

### Tarea 1 ###
FROM node:12.14.1-alpine as builder

COPY package.json package-lock.json ./

RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run ng build -- --prod --output-path=dist


### Tarea 2 ###

FROM nginx:1.14.1-alpine

COPY nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
