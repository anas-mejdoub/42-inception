#!/bin/bash

#apt-get install -y php-redis
sleep 10
if [ ! -f /bin/wp ] ; then
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	chmod +x wp-cli.phar
	mv wp-cli.phar /bin/wp
fi

sed -i "s|bind 127.0.0.1 -::1|bind 0.0.0.0|" /etc/redis/redis.conf

if [ -f /var/www/html/wordpress/wp-config.php ] ; then
	echo "ah lqiito"
	cd /var/www/html/wordpress
	wp config set WP_REDIS_HOST 'redis' --type=constant --raw --allow-root
	wp config set WP_REDIS_PORT 6379 --type=constant --raw --allow-root
fi
echo "running redis..."
exec redis-server /etc/redis/redis.conf --protected-mode no
