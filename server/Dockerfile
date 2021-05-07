FROM  node:14

MAINTAINER   Andrei
RUN mkdir Test
WORKDIR Test

COPY  server2.js /test/server2.js

RUN npm install express

CMD ["node", "server2.js" ]
EXPOSE 8080
