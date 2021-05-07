FROM  node:14

MAINTAINER   Andrei

ENV	  JAVA_OPTIONS -Xmx512m
ADD   https://github.com/AndreiBaetica1/DO288-apps/server

COPY  /server

CMD [ "server2.js" ]
EXPOSE 8080
