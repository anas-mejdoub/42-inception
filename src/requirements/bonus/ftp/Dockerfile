FROM debian:12

RUN apt-get update && apt-get install -y vsftpd

EXPOSE 21 3000-3100

COPY ./tools/vsftpd.conf /etc/vsftpd.conf

COPY ./tools/setup_ftp.sh /setup_ftp.sh


ENTRYPOINT ["sh", "setup_ftp.sh"]

CMD ["/usr/sbin/vsftpd", "/etc/vsftpd.conf"]
