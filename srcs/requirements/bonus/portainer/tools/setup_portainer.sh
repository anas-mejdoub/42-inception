#!/bin/bash



tar -xvf portainer-2.19.2-linux-amd64.tar.gz
cd portainer

chmod +x portainer

# run it
exec ./portainer --bind 0.0.0.0:9000
