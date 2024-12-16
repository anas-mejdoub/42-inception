#!/bin/bash

useradd -m anas
mkdir -p  /var/run/vsftpd/empty


usermod -d /var/www/html/ anas

echo "anas:anas" | chpasswd
chown -R anas:anas /var/www/html/
chmod -R 755 /var/www/html
echo "ftp is starting..."

exec $@
