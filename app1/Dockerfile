FROM  node:14

RUN mkdir test2
WORKDIR /test2

COPY  server.js /test2/server.js

RUN npm install mysql
RUN npm install express

CMD ["node", "server.js"]
EXPOSE 3000
