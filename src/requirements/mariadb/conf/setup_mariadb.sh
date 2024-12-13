#!/bin/bash

if [ ! -d "/var/lib/mysql/${WP_DB_NAME}" ]; then
	<< EOF > /tmp/init_mariadb.sql
USE mysql;
FLUSH PRIVILEGES;
DELETE FROM mysql.user WHERE User='';
DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');
ALTER USER 'root'@'localhost' IDENTIFIED BY '${DB_ROOT_PASSWD}';
CREATE DATABASE ${WP_DB_NAME} CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER '${DB_USER}'@'%' IDENTIFIED by '${DB_PASSWD}';
GRANT ALL PRIVILEGES ON ${WP_DB_NAME}.* TO '${DB_USER}'@'%';
FLUSH PRIVILEGES;
EOF
	mariadbd --user=mysql --bootstrap < /tmp/init_mariadb.sql
else
	echo "mariadb database for wordpress already installed..."
fi

echo "running the database now ..."
exec mariadb --user=mysql --bind-address=0.0.0.0
