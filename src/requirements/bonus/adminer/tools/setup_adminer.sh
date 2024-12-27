#!bin/bash

rm -f /var/www/html/index.php

curl -L -o /var/www/html/index.php https://www.adminer.org/latest.php

cd /var/www/html


#mv adminer.php index.php

exec php -S 0.0.0.0:8080 -t /var/www/html/
