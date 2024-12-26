FROM debian:12

RUN apt-get update && apt-get install -y nginx

COPY ./tools /var/www/html/

COPY ./conf/nginx.conf /etc/nginx/nginx.conf

EXPOSE 443

CMD ["nginx ", "-c ", "/ect/nginx/nginx.conf" ]
