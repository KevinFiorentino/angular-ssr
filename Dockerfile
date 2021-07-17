FROM node:12-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install
RUN npm install pm2 -g

COPY . /usr/src/app

RUN npm run build:ssr

EXPOSE 4000

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
#CMD [ "npm", "run", "serve:ssr" ]
