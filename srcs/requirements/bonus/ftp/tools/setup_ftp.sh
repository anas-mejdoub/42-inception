#!/bin/bash

useradd -m anas
mkdir -p  /var/run/vsftpd/empty


usermod -d /var/www/html/ anas

echo "${FTP_USER}:${FTP_PASSWD}" | chpasswd

chmod -R 777 /var/www/html
echo "ftp is starting..."
 
exec $@
