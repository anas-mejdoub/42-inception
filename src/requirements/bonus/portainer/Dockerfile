FROM debian:12


RUN apt-get update && apt-get install -y curl && curl -LO https:/github.com/portainer/portainer/releases/download/2.19.2/portainer-2.19.2-linux-amd64.tar.gz

COPY ./tools/setup_portainer.sh /setup_portainer.sh


EXPOSE 9000

CMD ["bash" ,"setup_portainer.sh"]
