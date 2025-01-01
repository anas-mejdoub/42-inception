#!/bin/bash

ROOT_PASS=$(cat /run/secrets/root_db_passwd)
USER_PASS=$(cat /run/secrets/user_db_passwd)
echo "$PASS test sece"

if [ ! -d "/var/lib/mysql/${WP_DB_NAME}" ]; then
	cat << EOF > /tmp/init_mariadb.sql
USE mysql;
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY '${ROOT_PASS}';
CREATE DATABASE ${WP_DB_NAME} IF NOT EXISTS;
CREATE USER '${DB_USER}'@'%' IDENTIFIED by '${USER_PASS}';
GRANT ALL PRIVILEGES ON ${WP_DB_NAME}.* TO '${DB_USER}'@'%' IDENTIFIED BY '${USER_PASS}';
FLUSH PRIVILEGES;
EOF
	mariadbd --user=mysql --bootstrap < /tmp/init_mariadb.sql
else
	echo "mariadb database for wordpress already installed..."
fi

echo "running the database now ..."
exec mariadbd --user=mysql --bind-address=0.0.0.0
