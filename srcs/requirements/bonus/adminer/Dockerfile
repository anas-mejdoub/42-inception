FROM debian:12

RUN apt-get update && apt-get install -y php \
	php-mysqli \
	curl 

COPY ./tools/setup_adminer.sh /setup_adminer.sh

EXPOSE 8080

CMD ["bash", "setup_adminer.sh"]
