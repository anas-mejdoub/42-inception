FROM debian:12

RUN apt-get update && apt-get install -y redis-server && \
	apt-get install -y php-redis && apt-get install -y curl && apt-get install -y  procps \
	php-mysqli

COPY ./tools/setup_redis.sh /setup_redis.sh

EXPOSE 6379

CMD ["bash", "setup_redis.sh"]
