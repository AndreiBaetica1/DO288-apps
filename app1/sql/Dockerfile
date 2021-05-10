FROM mysql

WORKDIR sql

COPY ..


ENV MYSQL_HOST "localhost"
ENV MYSQL_USER "andrei"
ENV MYSQL_PASSWORD "Password"
ENV MYSQL_DATABASE "database1"

RUN mysql -u andrei -p < database1
