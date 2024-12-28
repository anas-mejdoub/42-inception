#!bin/bash

rm -f /var/www/html/index.php

curl -L -o /var/www/html/index.php https://www.adminer.org/latest.php


exec php -S 0.0.0.0:8080 -t /var/www/html/
