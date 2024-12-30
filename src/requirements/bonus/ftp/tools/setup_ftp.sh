#!/bin/bash

useradd -m anas
mkdir -p  /var/run/vsftpd/empty


usermod -d /var/www/html/ anas
#sed -i "s|#chroot_local_user|chroot_local_user|"  /etc/vsftpd.conf
echo "anas:anas" | chpasswd
#chown -R anas:anas /var/www/html/
chmod -R 777 /var/www/html
echo "ftp is starting..."

exec $@
