FROM node:12.18.1
 
WORKDIR /server

COPY package*.json ./

RUN npm install
CMD [ "node", "server.js" ]

EXPOSE 3000
