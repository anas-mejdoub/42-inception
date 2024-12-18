#!/bin/bash

echo "waiting for mariadb.."
sleep 3
if [ -f "/var/www/html/wp-config.php" ]; then
	echo "wp is already installed !"
	echo "exiting now with 0..."
	exit 0;
fi

if [ ! -d "/usr/local/bin/wp" ]; then 
	curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
	chmod +x wp-cli.phar
	mv wp-cli.phar /usr/local/bin/wp
fi


mkdir -p "/var/www/html/wordpress"
chmod -R 775 "/var/www/html/wordpress"
chown -R www-data:www-data "/var/www/html/wordpress"

cd /var/www/html/wordpress

# donwloading the core files of wp by using --allow-root for bypassing the root user err
wp core download --allow-root
# creating the config file
wp config create --dbname=$WP_DB_NAME --dbuser=$DB_USER --dbpass=$DB_PASSWD --dbhost=mariadb:3306 --allow-root
wp redis enable --allow-root

wp core install  --url="$WP_URL" --title="$WP_TITLE" --admin_user="$WP_ADMIN" --admin_password="$WP_ADMIN_PASSWD" --admin_email="$WP_ADMIN_EMAIL" --allow-root
echo "FPM is strating..." 
exec php-fpm8.2 -F
