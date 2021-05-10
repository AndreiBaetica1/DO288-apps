FROM mysql

RUN mkdir test2
WORKDIR /test2

COPY test.sql /test2/test.sql


ENV MYSQL_HOST "localhost"
ENV MYSQL_USER "andrei"
ENV MYSQL_PASSWORD "Password"
ENV MYSQL_DATABASE "database1"

EXPOSE 3000


