#!bin/bash

curl -L -o /var/www/html/adminer.php https://www.adminer.org/latest.php

cd /var/www/html

exec php -S 0.0.0.0:8080 -t /var/www/html/
