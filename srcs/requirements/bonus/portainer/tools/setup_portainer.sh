#!/bin/bash

# download the portainer
curl -LO https:/github.com/portainer/portainer/releases/download/2.19.2/portainer-2.19.2-linux-amd64.tar.gz

# extract the portainer 

tar -xvf portainer-2.19.2-linux-amd64.tar.gz
cd portainer
#ls -l
#cat portainer
#yes > /dev/null
# move it to a excutable path and make the binary executable
#mv portainer /bin/portainer

chmod +x portainer

# run it
exec ./portainer --bind 0.0.0.0:9000
