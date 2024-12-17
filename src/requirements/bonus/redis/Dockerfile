FROM debian:12

RUN apt-get update && apt-get install -y redis-server

COPY ./tools/setup_redis.sh /setup_redis.sh

CMD ["sh ", "setup_redis.sh"]
