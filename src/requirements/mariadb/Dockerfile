FROM debian:12

RUN apt update && apt install -y mariadb-server && \
	mkdir /run/mysqld && chmod 777 /run/mysqld && \
	chown mysql:mysql /run/mysqld

EXPOSE 3306

COPY ./conf/setup_mariadb.sh /setup_mariadb.sh

CMD ["sh", "setup_mariadb.sh"]
