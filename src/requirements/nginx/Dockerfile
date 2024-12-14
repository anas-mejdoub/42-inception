FROM debian:12

RUN apt-get update && apt-get install -y nginx openssl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /etc/nginx && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/server.key -out /etc/nginx/server.crt \
    -subj "/C=MR/ST=Tetouan/L=Tetouan/O=anas/OU=anas/CN=amejdoub.42.fr"

COPY ./conf/nginx.conf /etc/nginx/nginx.conf

COPY ./tools/html/wait.html /var/www/html/wordpress

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

