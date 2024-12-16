#!/bin/bash

useradd /home/${FTP_USER}
mkdir -p  /var/run/vsftpd/empty
echo "${FTP_USER}:${FTP_PASSWD}" | chpasswd

usermod -d /var/www/html/ ${FTP_USER}

echo "ftp is starting..."

exec $@
