FROM node:12.18.1
 
WORKDIR /server
RUN oc expose svc
RUN oc get route
COPY . .
 
CMD [ "node", "server.js" ]

EXPOSE 3000
