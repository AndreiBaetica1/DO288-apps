FROM  node:14

RUN mkdir test
WORKDIR /test

COPY  server.js /test/server.js

RUN npm install mysql
RUN npm install express

ENV MYSQL_HOST "172.0.0.1"
ENV MYSQL_PORT "3306"
ENV MYSQL_USER "andrei"
ENV MYSQL_PASSWORD "Password"
ENV MYSQL_DATABASE "database1"

CMD ["node", "server.js"]
EXPOSE 3000
