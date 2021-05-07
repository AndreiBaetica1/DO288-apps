FROM   registry.access.redhat.com/ubi8/ubi:8.0

MAINTAINER   Red hat

ENV	  JAVA_OPTIONS -Xmx512m
ADD   https://github.com/AndreiBaetica1/DO288-apps/server

COPY  /server

CMD [ "server2.js" ]
EXPOSE 8080
