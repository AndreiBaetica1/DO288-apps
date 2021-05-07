FROM  node:14

RUN mkdir test
WORKDIR /test

COPY  server2.js /test/server2.js

RUN npm install express

CMD ["node", "server2.js"]
EXPOSE 3000
