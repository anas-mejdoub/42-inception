#!/bin/bash
sleep 15 # waiting for db and wp to setup 
if [ ! -f /bin/wp ] ; then
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	chmod +x wp-cli.phar
	mv wp-cli.phar /bin/wp
fi

sed -i "s|bind 127.0.0.1 -::1|bind 0.0.0.0|" /etc/redis/redis.conf
sed -i "s|protected-mode yes|protected-mode no|" /etc/redis/redis.conf

chown -R redis:redis /var/lib/redis/
chmod -R 777 /var/lib/redis/

echo "running redis..."
exec redis-server /etc/redis/redis.conf --daemonize no # running redis without daemonize to run as fg too keep container alive
