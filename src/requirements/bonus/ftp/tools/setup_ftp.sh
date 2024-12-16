#!/bin/bash

useradd /home/${FTP_USER}

echo "${FTP_USER}:${FTP_PASSWD}" | chpasswd

usermod -d /var/www/html/ ${FTP_USER}

echo "ftp is starting..."

exec $@
