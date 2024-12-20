#!/bin/bash
sleep 10 # waiting for db and wp to setup 
if [ ! -f /bin/wp ] ; then
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	chmod +x wp-cli.phar
	mv wp-cli.phar /bin/wp
fi

sed -i "s|bind 127.0.0.1 -::1|bind 0.0.0.0|" /etc/redis/redis.conf
 
if [ -f /var/www/html/wp-config.php ] ; then
	cd /var/www/html/
	wp config set WP_REDIS_HOST 'redis' --type=constant --raw --allow-root
	wp config set WP_REDIS_PORT 6379 --type=constant --raw --allow-root
fi


echo "running redis..."
exec redis-server /etc/redis/redis.conf --daemonize no # running redis without daemonize to run as fg too keep container alive
