FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

COPY ./test.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]