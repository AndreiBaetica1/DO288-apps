FROM  node:14

RUN mkdir test
WORKDIR /test

COPY  server.js /test/server.js

RUN npm install mysql

CMD ["node", "server.js"]
EXPOSE 3000
