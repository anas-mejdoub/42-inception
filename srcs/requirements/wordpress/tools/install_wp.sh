#!/bin/bash
USER_PASS_DB=$(cat /run/secrets/user_db_passwd)
ADMIN_WP=$(cat /run/secrets/credentails | head -n 1)
ADMIN_WP_PASSWD=$(cat /run/secrets/credentails | head -n 2 | tail -n 1)
echo "waiting for mariadb.."
sleep 10
if [ -f "/var/www/html/wp-config.php" ]; then
	echo "wp is already installed !"
	echo "php FPM is starting now"
	exec php-fpm8.2 -F
fi

if [ ! -f "/usr/local/bin/wp" ]; then 
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	chmod +x wp-cli.phar
	mv wp-cli.phar /usr/local/bin/wp
fi


mkdir -p /var/www/html/

cd /var/www/html/
# donwloading the core files of wp by using --allow-root for bypassing the root user err
wp core download --allow-root
# creating the config file
wp config create --dbname=$WP_DB_NAME --dbuser=$DB_USER --dbpass=$USER_PASS_DB --dbhost=mariadb:3306 --allow-root
wp config set WP_REDIS_HOST 'redis' --type=constant --allow-root
wp config set WP_REDIS_PORT 6379 --type=constant --raw --allow-root
wp user create $SEC_USER_NAME $SEC_USER_EMAIL --role=editor --user_pass=$SEC_USER_PASS --allow-root
wp core install  --url="$WP_URL" --title="$WP_TITLE" --admin_user="$ADMIN_WP" --admin_password="$ADMIN_WP_PASSWD" --admin_email="$WP_ADMIN_EMAIL" --allow-root
wp plugin install redis-cache --activate --allow-root
wp redis enable --allow-root
wp theme install twentytwentyfour --allow-root
wp theme activate twentytwentyfour --allow-root
chmod -R 777 /var/www/html/*
chown -R www-data:www-data .
echo "php FPM is strating now" 
exec php-fpm8.2 -F
