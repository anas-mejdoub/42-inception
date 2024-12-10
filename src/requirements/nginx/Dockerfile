FROM debian:latest

RUN apt-get update && apt-get install -y nginx openssl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /etc/nginx && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/server.key -out /etc/nginx/server.crt \
    -subj "/C=MR/ST=Tetouan/L=Tetouan/O=anas/OU=anas/CN=localhost"

COPY nginx.conf /etc/nginx/nginx.conf

COPY html /html

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

