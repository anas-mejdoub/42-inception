#!/bin/bash

echo "waiting for mariadb.."
sleep 10
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp
if [ -f "/var/www/html/wp-config.php" ]; then
	echo "wp is already installed !"
	echo "php FPM is starting now"
	sleep 6
	cd /var/www/html
	chown -R www-data:www-data .
	exec php-fpm8.2 -F
fi

if [ ! -d "/usr/local/bin/wp" ]; then 
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	chmod +x wp-cli.phar
	mv wp-cli.phar /usr/local/bin/wp
fi


mkdir -p /var/www/html/
#chmod -R 777 /var/www/html/*
#chown -R www-data:www-data /var/www/html/

cd /var/www/html/
# donwloading the core files of wp by using --allow-root for bypassing the root user err
wp core download --allow-root
# creating the config file
wp config create --dbname=$WP_DB_NAME --dbuser=$DB_USER --dbpass=$DB_PASSWD --dbhost=mariadb:3306 --allow-root
wp config set WP_REDIS_HOST 'redis' --type=constant --allow-root
wp config set WP_REDIS_PORT 6379 --type=constant --raw --allow-root
wp user create $SEC_USER_NAME $SEC_USER_EMAIL --role=editor --user_pass=$SEC_USER_PASS
wp core install  --url="$WP_URL" --title="$WP_TITLE" --admin_user="$WP_ADMIN" --admin_password="$WP_ADMIN_PASSWD" --admin_email="$WP_ADMIN_EMAIL" --allow-root
wp plugin install redis-cache --activate --allow-root
wp redis enable --allow-root
wp theme install twentytwentythree
wp theme activate twentytwentythree
chmod -R 777 /var/www/html/*
chown -R www-data:www-data .
echo "php FPM is strating now" 
exec php-fpm8.2 -F
