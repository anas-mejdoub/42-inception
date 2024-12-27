FROM debian:12 

RUN apt-get update && apt-get install -y curl \
	&& curl -fsSL https://deb.nodesource.com/setup_23.x | bash - \
	&& apt-get install -y nodejs

COPY ./tools/  /var/www/html/static-website

EXPOSE 5173

WORKDIR /var/www/html/static-website

RUN npm install

CMD ["npm", "run", "dev"]
